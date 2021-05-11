import React from 'react';
import PropTypes from 'prop-types';
import { formatCurrency, formatDate } from './utils';
import EntityInfo from './EntityInfo';

const styles = `
.invoice-box{
  max-width:800px;
  margin:auto;
  padding:30px;
  border:1px solid #eee;
  box-shadow:0 0 10px rgba(0, 0, 0, .15);
  font-size:16px;
  line-height:24px;
  font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
  color:#555;
}

.invoice-box table{
  width:100%;
  line-height:inherit;
  text-align:left;
}

.invoice-box table td{
  padding:5px;
  vertical-align:top;
}

.invoice-box table td td{
  padding:0;
}

.invoice-box table tr td:nth-child(2){
  text-align:right;
}

.invoice-box table tr.top table td{
  padding-bottom:20px;
}

.invoice-box table tr.top table td.title{
  font-size:35px;
  line-height:35px;
  color:#333;
}

.invoice-box table tr.information table td{
  padding-bottom:40px;
}

.invoice-box table tr.information table td.information-column{
  width:50%;
}

.invoice-box table table.invoice-information{
  display:inline-block;
  width:auto;
}

.invoice-box table table.invoice-information td:first-child{
  padding-right:30px;
}

.invoice-box table tr.information table td td{
  padding-bottom:0;
}

.invoice-box table tr.heading td{
  background:#eee;
  border-bottom:1px solid #ddd;
  font-weight:bold;
}

.invoice-box table tr.details td{
  padding-bottom:20px;
}

.invoice-box table tr.item td{
  border-bottom:1px solid #eee;
}

.invoice-box table tr.item.last td{
  border-bottom:none;
}

.invoice-box table tr.total td:nth-child(2){
  background:#eee;
  font-weight:bold;
}

.invoice-box .subheading {
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
}

@media only screen and (max-width: 600px) {
  .invoice-box table tr.top table td{
    width:100%;
    display:block;
    text-align:center;
  }

  .invoice-box table tr.information table td{
    width:100%;
    display:block;
    text-align:center;
  }
}

@media print {
  .invoice-box {
    box-shadow: none;
    border: 0;
    page-break-after: always;
  }
}
`;

export default function Invoice({
  invoice: invoiceProp, invoices: invoicesProp, company, customer, lang, notes,
}) {
  const invoices = invoicesProp || [invoiceProp];

  const firstInvoice = invoices[0];
  if (!firstInvoice) {
    throw new Error('At least one invoice must be defined');
  }

  const invoiceName = firstInvoice.name || 'Invoice';

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <title>{company.name} {invoiceName}</title>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        {invoices.map((invoice) => {
          const { items } = invoice;
          const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);

          return (
            <div className="invoice-box" key={invoice.name}>
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr className="top">
                    <td colSpan="2">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <div className="subheading">From</div>
                              <EntityInfo entity={company} />
                            </td>
                            <td className="title">
                              <img
                                src={company.logoUrl}
                                style={{
                                  display: 'block',
                                  width: 'auto',
                                  height: 'auto',
                                  maxWidth: '200px',
                                  maxHeight: '100px',
                                  marginLeft: 'auto',
                                }}
                                alt={company.name}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr className="information">
                    <td colSpan="2">
                      <table>
                        <tbody>
                          <tr>
                            <td className="information-column">
                              <div className="subheading">To</div>
                              <EntityInfo entity={customer} />
                            </td>
                            <td className="information-column">
                              <table className="invoice-information">
                                <tbody>
                                  <tr>
                                    <td className="subheading">{invoiceName} #</td>
                                    <td>{invoice.id}</td>
                                  </tr>
                                  {invoice.paymentMethod && (
                                    <tr>
                                      <td className="subheading">Payment Method</td>
                                      <td>{invoice.paymentMethod}</td>
                                    </tr>
                                  )}
                                  {invoice.createdDate && (
                                    <tr>
                                      <td className="subheading">{invoiceName} Date</td>
                                      <td>{formatDate(invoice.createdDate)}</td>
                                    </tr>
                                  )}
                                  {invoice.paidDate && (
                                    <tr>
                                      <td className="subheading">Paid Date</td>
                                      <td>{formatDate(invoice.paidDate)}</td>
                                    </tr>
                                  )}
                                  {invoice.dueDate && !invoice.paidDate && (
                                    <tr>
                                      <td className="subheading">Due Date</td>
                                      <td>{formatDate(invoice.dueDate)}</td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  {invoice.description && [
                    <tr className="heading" key="heading">
                      <td className="subheading" colSpan="2">Description</td>
                    </tr>,
                    <tr className="details" key="details">
                      <td colSpan="2">{invoice.description}</td>
                    </tr>,
                  ]}
                  <tr className="heading">
                    <td className="subheading">Item</td>
                    <td />
                  </tr>
                  {items.map((item) => (
                    <tr className="item" key={item.description}>
                      <td>{item.description}</td>
                      <td>{formatCurrency(item.amount)}</td>
                    </tr>
                  ))}
                  <tr className="total">
                    <td />
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td className="subheading">Total</td>
                            <td>{formatCurrency(totalAmount)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              {notes && (
                <div style={{ marginTop: 30 }}>
                  <div className="subheading">Notes</div>
                  {notes}
                </div>
              )}
            </div>
          );
        })}
      </body>
    </html>
  );
}

const InvoicePropType = PropTypes.shape({
  createdDate: PropTypes.string,
  dueDate: PropTypes.string,
  paidDate: PropTypes.string,
  paymentMethod: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  name: PropTypes.string,
});

Invoice.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
    logoUrl: PropTypes.string,
  }).isRequired,
  customer: PropTypes.shape({}).isRequired,
  invoice: InvoicePropType,
  invoices: PropTypes.arrayOf(InvoicePropType),
  lang: PropTypes.string,
  notes: PropTypes.node,
};

Invoice.defaultProps = {
  lang: 'en_US',
  notes: null,
};
