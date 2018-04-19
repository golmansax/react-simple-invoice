'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = formatDate;
exports.formatCurrency = formatCurrency;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatDate(date) {
  return (0, _moment2.default)(date).format('MMM Do, YYYY');
}

function formatCurrency(amount) {
  return (0, _numeral2.default)(amount).format('$0,0.00');
}