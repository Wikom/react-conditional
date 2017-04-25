/**
 * Created by rouven on 22.04.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const DEFAULTS = {
    passProps: false,
    wrapperTag: 'span'
};

const configure = ({passProps = DEFAULTS.passProps, wrapperTag = DEFAULTS.wrapperTag}) => {
    DEFAULTS.passProps = passProps;
    DEFAULTS.wrapperTag = wrapperTag;
};

const renderChild = (child, props, {passProps, wrapperTag}) => {
    if (typeof child === 'string')
        return React.createElement(wrapperTag, null, child);

    if (React.isValidElement(child) === false)
        return null;

    if (passProps === true)
        return React.cloneElement(child, props);

    return child;
};

const ConditionalComponent = ({condition, children, state, dispatch, passProps = DEFAULTS.passProps, wrapperTag = DEFAULTS.wrapperTag, ...props}) => {
    if (condition(props, state) !== true)
        return null;

    if (children instanceof Array)
        return React.createElement(
            wrapperTag,
            null,
            React.Children.map(children, child => renderChild(child, props, {passProps, wrapperTag}))
        );

    return renderChild(children, props, {passProps, wrapperTag});
};

const mapStateToProps = state => ({
    state: state
});

const Conditional = connect(mapStateToProps)(ConditionalComponent);

Conditional.propTypes = {
    condition: PropTypes.func.isRequired,
    passProps: PropTypes.bool,
    wrapperTag: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Conditional;
export {Conditional, configure};