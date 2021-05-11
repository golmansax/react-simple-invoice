"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Invoice;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("./utils");

var _EntityInfo = _interopRequireDefault(require("./EntityInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = "\n.invoice-box{\n  max-width:800px;\n  margin:auto;\n  padding:30px;\n  border:1px solid #eee;\n  box-shadow:0 0 10px rgba(0, 0, 0, .15);\n  font-size:16px;\n  line-height:24px;\n  font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;\n  color:#555;\n}\n\n.invoice-box table{\n  width:100%;\n  line-height:inherit;\n  text-align:left;\n}\n\n.invoice-box table td{\n  padding:5px;\n  vertical-align:top;\n}\n\n.invoice-box table td td{\n  padding:0;\n}\n\n.invoice-box table tr td:nth-child(2){\n  text-align:right;\n}\n\n.invoice-box table tr.top table td{\n  padding-bottom:20px;\n}\n\n.invoice-box table tr.top table td.title{\n  font-size:35px;\n  line-height:35px;\n  color:#333;\n}\n\n.invoice-box table tr.information table td{\n  padding-bottom:40px;\n}\n\n.invoice-box table tr.information table td.information-column{\n  width:50%;\n}\n\n.invoice-box table table.invoice-information{\n  display:inline-block;\n  width:auto;\n}\n\n.invoice-box table table.invoice-information td:first-child{\n  padding-right:30px;\n}\n\n.invoice-box table tr.information table td td{\n  padding-bottom:0;\n}\n\n.invoice-box table tr.heading td{\n  background:#eee;\n  border-bottom:1px solid #ddd;\n  font-weight:bold;\n}\n\n.invoice-box table tr.details td{\n  padding-bottom:20px;\n}\n\n.invoice-box table tr.item td{\n  border-bottom:1px solid #eee;\n}\n\n.invoice-box table tr.item.last td{\n  border-bottom:none;\n}\n\n.invoice-box table tr.total td:nth-child(2){\n  background:#eee;\n  font-weight:bold;\n}\n\n.invoice-box .subheading {\n  font-weight: bold;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\n.invoice-box .original-amount {\n  text-decoration: line-through;\n  color: #888;\n  font-weight: normal;\n  margin-right: 5px;\n}\n\n@media only screen and (max-width: 600px) {\n  .invoice-box table tr.top table td{\n    width:100%;\n    display:block;\n    text-align:center;\n  }\n\n  .invoice-box table tr.information table td{\n    width:100%;\n    display:block;\n    text-align:center;\n  }\n}\n\n@media print {\n  .invoice-box {\n    box-shadow: none;\n    border: 0;\n    page-break-after: always;\n  }\n}\n";

function Invoice(_ref) {
  var invoiceProp = _ref.invoice,
      invoicesProp = _ref.invoices,
      company = _ref.company,
      customer = _ref.customer,
      lang = _ref.lang,
      notes = _ref.notes;
  var invoices = invoicesProp || [invoiceProp];
  var firstInvoice = invoices[0];

  if (!firstInvoice) {
    throw new Error('At least one invoice must be defined');
  }

  var invoiceName = firstInvoice.name || 'Invoice';
  return /*#__PURE__*/_react["default"].createElement("html", {
    lang: lang
  }, /*#__PURE__*/_react["default"].createElement("head", null, /*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/_react["default"].createElement("title", null, company.name, " ", invoiceName), /*#__PURE__*/_react["default"].createElement("style", {
    dangerouslySetInnerHTML: {
      __html: styles
    }
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "robots",
    content: "noindex, nofollow"
  })), /*#__PURE__*/_react["default"].createElement("body", null, invoices.map(function (invoice) {
    var items = invoice.items;
    var totalAmount = items.reduce(function (sum, item) {
      return sum + item.amount;
    }, 0);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "invoice-box",
      key: invoice.name
    }, /*#__PURE__*/_react["default"].createElement("table", {
      cellPadding: "0",
      cellSpacing: "0"
    }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", {
      className: "top"
    }, /*#__PURE__*/_react["default"].createElement("td", {
      colSpan: "2"
    }, /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "subheading"
    }, "From"), /*#__PURE__*/_react["default"].createElement(_EntityInfo["default"], {
      entity: company
    })), /*#__PURE__*/_react["default"].createElement("td", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: company.logoUrl,
      style: {
        display: 'block',
        width: 'auto',
        height: 'auto',
        maxWidth: '200px',
        maxHeight: '100px',
        marginLeft: 'auto'
      },
      alt: company.name
    }))))))), /*#__PURE__*/_react["default"].createElement("tr", {
      className: "information"
    }, /*#__PURE__*/_react["default"].createElement("td", {
      colSpan: "2"
    }, /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
      className: "information-column"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "subheading"
    }, "To"), /*#__PURE__*/_react["default"].createElement(_EntityInfo["default"], {
      entity: customer
    })), /*#__PURE__*/_react["default"].createElement("td", {
      className: "information-column"
    }, /*#__PURE__*/_react["default"].createElement("table", {
      className: "invoice-information"
    }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
      className: "subheading"
    }, invoiceName, " #"), /*#__PURE__*/_react["default"].createElement("td", null, invoice.id)), invoice.paymentMethod && /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
      className: "subheading"
    }, "Payment Method"), /*#__PURE__*/_react["default"].createElement("td", null, invoice.paymentMethod)), invoice.createdDate && /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
      className: "subheading"
    }, invoiceName, " Date"), /*#__PURE__*/_react["default"].createElement("td", null, (0, _utils.formatDate)(invoice.createdDate))), invoice.terms && /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
      className: "subheading"
    }, "Terms"), /*#__PURE__*/_react["default"].createElement("td", null, (0, _utils.formatDate)(invoice.terms))), invoice.paidDate && /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
      className: "subheading"
    }, "Paid Date"), /*#__PURE__*/_react["default"].createElement("td", null, (0, _utils.formatDate)(invoice.paidDate))), invoice.dueDate && !invoice.paidDate && /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
      className: "subheading"
    }, "Due Date"), /*#__PURE__*/_react["default"].createElement("td", null, (0, _utils.formatDate)(invoice.dueDate))))))))))), invoice.description && [/*#__PURE__*/_react["default"].createElement("tr", {
      className: "heading",
      key: "heading"
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "subheading",
      colSpan: "2"
    }, "Description")), /*#__PURE__*/_react["default"].createElement("tr", {
      className: "details",
      key: "details"
    }, /*#__PURE__*/_react["default"].createElement("td", {
      colSpan: "2"
    }, invoice.description))], /*#__PURE__*/_react["default"].createElement("tr", {
      className: "heading"
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "subheading"
    }, "Item"), /*#__PURE__*/_react["default"].createElement("td", null)), items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement("tr", {
        className: "item",
        key: item.description
      }, /*#__PURE__*/_react["default"].createElement("td", null, item.description), /*#__PURE__*/_react["default"].createElement("td", null, item.originalAmount && item.originalAmount !== item.amount && /*#__PURE__*/_react["default"].createElement("span", {
        className: "original-amount"
      }, (0, _utils.formatCurrency)(item.originalAmount)), (0, _utils.formatCurrency)(item.amount)));
    }), /*#__PURE__*/_react["default"].createElement("tr", {
      className: "total"
    }, /*#__PURE__*/_react["default"].createElement("td", null), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
      className: "subheading"
    }, "Total"), /*#__PURE__*/_react["default"].createElement("td", null, (0, _utils.formatCurrency)(totalAmount))))))))), notes && /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        marginTop: 30
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "subheading"
    }, "Notes"), notes));
  })));
}

var InvoicePropType = _propTypes["default"].shape({
  createdDate: _propTypes["default"].string,
  dueDate: _propTypes["default"].string,
  paidDate: _propTypes["default"].string,
  paymentMethod: _propTypes["default"].string,
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  description: _propTypes["default"].string.isRequired,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    description: _propTypes["default"].string.isRequired,
    amount: _propTypes["default"].number.isRequired,
    originalAmount: _propTypes["default"].number
  }).isRequired).isRequired,
  name: _propTypes["default"].string,
  terms: _propTypes["default"].string
});

Invoice.propTypes = {
  company: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    logoUrl: _propTypes["default"].string
  }).isRequired,
  customer: _propTypes["default"].shape({}).isRequired,
  invoice: InvoicePropType,
  invoices: _propTypes["default"].arrayOf(InvoicePropType),
  lang: _propTypes["default"].string,
  notes: _propTypes["default"].node
};
Invoice.defaultProps = {
  lang: 'en_US',
  invoice: null,
  invoices: null,
  notes: null
};