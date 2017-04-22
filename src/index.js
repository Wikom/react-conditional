/**
 * Created by rouven on 22.04.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const ConditionalComponent = ({condition, children, state}) =>
    condition(children.props, state) === true ? children : null;

const mapStateToProps = state => ({
    state: state
});

const Conditional = connect(mapStateToProps)(ConditionalComponent);

Conditional.propTypes = {
    condition: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
};

export default Conditional;