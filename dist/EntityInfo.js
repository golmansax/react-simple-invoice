'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EntityInfo;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EntityInfo(_ref) {
  var entity = _ref.entity;
  var name = entity.name,
      email = entity.email,
      address = entity.address;


  return _react2.default.createElement(
    'div',
    null,
    name && _react2.default.createElement(
      'div',
      null,
      name
    ),
    address && address.map(function (line) {
      return _react2.default.createElement(
        'div',
        { key: line },
        line
      );
    }),
    email && _react2.default.createElement(
      'a',
      { href: 'mailto:' + email },
      email
    )
  );
}

EntityInfo.propTypes = {
  entity: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    email: _propTypes2.default.string,
    address: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string.isRequired)])
  }).isRequired
};