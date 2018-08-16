'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Invoice;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

var _EntityInfo = require('./EntityInfo');

var _EntityInfo2 = _interopRequireDefault(_EntityInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = '\n.invoice-box{\n  max-width:800px;\n  margin:auto;\n  padding:30px;\n  border:1px solid #eee;\n  box-shadow:0 0 10px rgba(0, 0, 0, .15);\n  font-size:16px;\n  line-height:24px;\n  font-family:\'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif;\n  color:#555;\n}\n\n.invoice-box table{\n  width:100%;\n  line-height:inherit;\n  text-align:left;\n}\n\n.invoice-box table td{\n  padding:5px;\n  vertical-align:top;\n}\n\n.invoice-box table td td{\n  padding:0;\n}\n\n.invoice-box table tr td:nth-child(2){\n  text-align:right;\n}\n\n.invoice-box table tr.top table td{\n  padding-bottom:20px;\n}\n\n.invoice-box table tr.top table td.title{\n  font-size:35px;\n  line-height:35px;\n  color:#333;\n}\n\n.invoice-box table tr.information table td{\n  padding-bottom:40px;\n}\n\n.invoice-box table table.invoice-information{\n  display:inline-block;\n  width:auto;\n}\n\n.invoice-box table table.invoice-information td:first-child{\n  padding-right:30px;\n}\n\n.invoice-box table tr.information table td td{\n  padding-bottom:0;\n}\n\n.invoice-box table tr.heading td{\n  background:#eee;\n  border-bottom:1px solid #ddd;\n  font-weight:bold;\n}\n\n.invoice-box table tr.details td{\n  padding-bottom:20px;\n}\n\n.invoice-box table tr.item td{\n  border-bottom:1px solid #eee;\n}\n\n.invoice-box table tr.item.last td{\n  border-bottom:none;\n}\n\n.invoice-box table tr.total td:nth-child(2){\n  background:#eee;\n  font-weight:bold;\n}\n\n.invoice-box .subheading {\n  font-weight: bold;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n@media only screen and (max-width: 600px) {\n  .invoice-box table tr.top table td{\n    width:100%;\n    display:block;\n    text-align:center;\n  }\n\n  .invoice-box table tr.information table td{\n    width:100%;\n    display:block;\n    text-align:center;\n  }\n}\n\n@media print {\n  .invoice-box {\n    box-shadow: none;\n    border: 0;\n  }\n}\n';

function Invoice(_ref) {
  var invoice = _ref.invoice,
      company = _ref.company,
      customer = _ref.customer,
      lang = _ref.lang,
      notes = _ref.notes;
  var items = invoice.items;

  var totalAmount = items.reduce(function (sum, item) {
    return sum + item.amount;
  }, 0);

  return _react2.default.createElement(
    'html',
    { lang: lang },
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement('meta', { charSet: 'utf-8' }),
      _react2.default.createElement(
        'title',
        null,
        company.name,
        ' Invoice'
      ),
      _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: styles } }),
      _react2.default.createElement('meta', { name: 'robots', content: 'noindex, nofollow' })
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement(
        'div',
        { className: 'invoice-box' },
        _react2.default.createElement(
          'table',
          { cellPadding: '0', cellSpacing: '0' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              { className: 'top' },
              _react2.default.createElement(
                'td',
                { colSpan: '2' },
                _react2.default.createElement(
                  'table',
                  null,
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'subheading' },
                          'Bill From'
                        ),
                        _react2.default.createElement(_EntityInfo2.default, { entity: company })
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'title' },
                        _react2.default.createElement('img', {
                          src: company.logoUrl,
                          style: { width: '100%', maxWidth: '200px' },
                          alt: company.name
                        })
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              { className: 'information' },
              _react2.default.createElement(
                'td',
                { colSpan: '2' },
                _react2.default.createElement(
                  'table',
                  null,
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'subheading' },
                          'Bill To'
                        ),
                        _react2.default.createElement(_EntityInfo2.default, { entity: customer })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'table',
                          { className: 'invoice-information' },
                          _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement(
                                'td',
                                { className: 'subheading' },
                                'Invoice #'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                invoice.id
                              )
                            ),
                            invoice.paymentMethod && _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement(
                                'td',
                                { className: 'subheading' },
                                'Payment Method'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                invoice.paymentMethod
                              )
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement(
                                'td',
                                { className: 'subheading' },
                                'Created'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                (0, _utils.formatDate)(invoice.createdDate)
                              )
                            ),
                            invoice.paidDate && _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement(
                                'td',
                                { className: 'subheading' },
                                'Paid'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                (0, _utils.formatDate)(invoice.paidDate)
                              )
                            ),
                            invoice.dueDate && !invoice.paidDate && _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement(
                                'td',
                                { className: 'subheading' },
                                'Due'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                (0, _utils.formatDate)(invoice.dueDate)
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            invoice.description && [_react2.default.createElement(
              'tr',
              { className: 'heading', key: 'heading' },
              _react2.default.createElement(
                'td',
                { className: 'subheading', colSpan: '2' },
                'Description'
              )
            ), _react2.default.createElement(
              'tr',
              { className: 'details', key: 'details' },
              _react2.default.createElement(
                'td',
                { colSpan: '2' },
                invoice.description
              )
            )],
            _react2.default.createElement(
              'tr',
              { className: 'heading' },
              _react2.default.createElement(
                'td',
                { className: 'subheading' },
                'Item'
              ),
              _react2.default.createElement('td', null)
            ),
            items.map(function (item) {
              return _react2.default.createElement(
                'tr',
                { className: 'item', key: item.description },
                _react2.default.createElement(
                  'td',
                  null,
                  item.description
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  (0, _utils.formatCurrency)(item.amount)
                )
              );
            }),
            _react2.default.createElement(
              'tr',
              { className: 'total' },
              _react2.default.createElement('td', null),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'table',
                  null,
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        { className: 'subheading' },
                        'Total'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        (0, _utils.formatCurrency)(totalAmount)
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        notes && _react2.default.createElement(
          'div',
          { style: { marginTop: 30 } },
          _react2.default.createElement(
            'div',
            { className: 'subheading' },
            'Notes'
          ),
          notes
        )
      )
    )
  );
}

Invoice.propTypes = {
  company: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    logoUrl: _propTypes2.default.string
  }).isRequired,
  customer: _propTypes2.default.shape({}).isRequired,
  invoice: _propTypes2.default.shape({
    createdDate: _propTypes2.default.string.isRequired,
    dueDate: _propTypes2.default.string.isRequired,
    paidDate: _propTypes2.default.string,
    paymentMethod: _propTypes2.default.string,
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    description: _propTypes2.default.string.isRequired,
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      description: _propTypes2.default.string.isRequired,
      amount: _propTypes2.default.number.isRequired
    }).isRequired).isRequired
  }).isRequired,
  lang: _propTypes2.default.string,
  notes: _propTypes2.default.node
};

Invoice.defaultProps = {
  lang: 'en_US',
  notes: null
};