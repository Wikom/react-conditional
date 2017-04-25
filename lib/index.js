'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = exports.Conditional = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by rouven on 22.04.17.
                                                                                                                                                                                                                              */

var DEFAULTS = {
    passProps: false,
    wrapperTag: 'span'
};

var configure = function configure(_ref) {
    var _ref$passProps = _ref.passProps,
        passProps = _ref$passProps === undefined ? DEFAULTS.passProps : _ref$passProps,
        _ref$wrapperTag = _ref.wrapperTag,
        wrapperTag = _ref$wrapperTag === undefined ? DEFAULTS.wrapperTag : _ref$wrapperTag;

    DEFAULTS.passProps = passProps;
    DEFAULTS.wrapperTag = wrapperTag;
};

var renderChild = function renderChild(child, props, _ref2) {
    var passProps = _ref2.passProps,
        wrapperTag = _ref2.wrapperTag;

    if (typeof child === 'string') return _react2.default.createElement(wrapperTag, null, child);

    if (_react2.default.isValidElement(child) === false) return null;

    if (passProps === true) return _react2.default.cloneElement(child, props);

    return child;
};

var ConditionalComponent = function ConditionalComponent(_ref3) {
    var condition = _ref3.condition,
        children = _ref3.children,
        state = _ref3.state,
        dispatch = _ref3.dispatch,
        _ref3$passProps = _ref3.passProps,
        passProps = _ref3$passProps === undefined ? DEFAULTS.passProps : _ref3$passProps,
        _ref3$wrapperTag = _ref3.wrapperTag,
        wrapperTag = _ref3$wrapperTag === undefined ? DEFAULTS.wrapperTag : _ref3$wrapperTag,
        props = _objectWithoutProperties(_ref3, ['condition', 'children', 'state', 'dispatch', 'passProps', 'wrapperTag']);

    if (condition(props, state) !== true) return null;

    if (children instanceof Array) return _react2.default.createElement(wrapperTag, null, _react2.default.Children.map(children, function (child) {
        return renderChild(child, props, { passProps: passProps, wrapperTag: wrapperTag });
    }));

    return renderChild(children, props, { passProps: passProps, wrapperTag: wrapperTag });
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        state: state
    };
};

var Conditional = (0, _reactRedux.connect)(mapStateToProps)(ConditionalComponent);

Conditional.propTypes = {
    condition: _propTypes2.default.func.isRequired,
    passProps: _propTypes2.default.bool,
    wrapperTag: _propTypes2.default.string,
    children: _propTypes2.default.node.isRequired
};

exports.default = Conditional;
exports.Conditional = Conditional;
exports.configure = configure;