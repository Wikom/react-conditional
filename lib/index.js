"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = exports.Conditional = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DEFAULTS = {
  passProps: false,
  wrapperTag: 'span'
};

var configure = function configure(_ref) {
  var _ref$passProps = _ref.passProps,
      passProps = _ref$passProps === void 0 ? DEFAULTS.passProps : _ref$passProps,
      _ref$wrapperTag = _ref.wrapperTag,
      wrapperTag = _ref$wrapperTag === void 0 ? DEFAULTS.wrapperTag : _ref$wrapperTag;
  DEFAULTS.passProps = passProps;
  DEFAULTS.wrapperTag = wrapperTag;
};

exports.configure = configure;

var renderChild = function renderChild(child, props, _ref2) {
  var passProps = _ref2.passProps,
      wrapperTag = _ref2.wrapperTag;
  if (typeof child === 'string') return _react["default"].createElement(wrapperTag, null, child);
  if (_react["default"].isValidElement(child) === false) return null;
  if (passProps === true) return _react["default"].cloneElement(child, props);
  return child;
};

var ConditionalComponent = function ConditionalComponent(_ref3) {
  var condition = _ref3.condition,
      children = _ref3.children,
      state = _ref3.state,
      dispatch = _ref3.dispatch,
      _ref3$passProps = _ref3.passProps,
      passProps = _ref3$passProps === void 0 ? DEFAULTS.passProps : _ref3$passProps,
      _ref3$wrapperTag = _ref3.wrapperTag,
      wrapperTag = _ref3$wrapperTag === void 0 ? DEFAULTS.wrapperTag : _ref3$wrapperTag,
      props = _objectWithoutProperties(_ref3, ["condition", "children", "state", "dispatch", "passProps", "wrapperTag"]);

  if (condition(props, state) !== true) return null;
  if (children instanceof Array) return _react["default"].createElement(wrapperTag, null, _react["default"].Children.map(children, function (child) {
    return renderChild(child, props, {
      passProps: passProps,
      wrapperTag: wrapperTag
    });
  }));
  return renderChild(children, props, {
    passProps: passProps,
    wrapperTag: wrapperTag
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var Conditional = (0, _reactRedux.connect)(mapStateToProps)(ConditionalComponent);
exports.Conditional = Conditional;
Conditional.propTypes = {
  condition: _propTypes["default"].func.isRequired,
  passProps: _propTypes["default"].bool,
  wrapperTag: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired
};
var _default = Conditional;
exports["default"] = _default;