/**
 * Created by rouven on 22.04.17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const ConditionalComponent = ({condition, Component, state}) =>
    condition(Component.props, state) === true ? Component : null;

const mapStateToProps = state => ({
    state: state
});

const Conditional = connect(mapStateToProps)(ConditionalComponent);

Conditional.propTypes = {
    condition: PropTypes.func.isRequired,
    Component: PropTypes.element.isRequired
};

export default Conditional;