"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EntityInfo;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function EntityInfo(_ref) {
  var entity = _ref.entity;
  var name = entity.name,
      email = entity.email,
      address = entity.address;
  return /*#__PURE__*/_react["default"].createElement("div", null, name && /*#__PURE__*/_react["default"].createElement("div", null, name), address && address.map(function (line) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: line
    }, line);
  }), email && /*#__PURE__*/_react["default"].createElement("a", {
    href: "mailto:".concat(email)
  }, email));
}

EntityInfo.propTypes = {
  entity: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    email: _propTypes["default"].string,
    address: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string.isRequired)])
  }).isRequired
};