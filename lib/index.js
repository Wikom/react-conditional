'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConditionalComponent = function ConditionalComponent(_ref) {
    var condition = _ref.condition,
        children = _ref.children,
        state = _ref.state;
    return condition(children.props, state) === true ? children : null;
}; /**
    * Created by rouven on 22.04.17.
    */

var mapStateToProps = function mapStateToProps(state) {
    return {
        state: state
    };
};

var Conditional = (0, _reactRedux.connect)(mapStateToProps)(ConditionalComponent);

Conditional.propTypes = {
    condition: _propTypes2.default.func.isRequired,
    children: _propTypes2.default.element.isRequired
};

exports.default = Conditional;