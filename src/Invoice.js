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

.invoice-box table tr td:nth-child(2){
  text-align:right;
}

.invoice-box table tr.top table td{
  padding-bottom:20px;
}

.invoice-box table tr.top table td.title{
  font-size:45px;
  line-height:45px;
  color:#333;
}

.invoice-box table tr.information table td{
  padding-bottom:40px;
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
  border-top:2px solid #eee;
  font-weight:bold;
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
  }
}
`;

export default function Invoice({
  invoice, company, customer, lang,
}) {
  const { items } = invoice;
  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <title>{company.name} Invoice</title>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        <div className="invoice-box">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr className="top">
                <td colSpan="2">
                  <table>
                    <tbody>
                      <tr>
                        <td className="title">
                          <img
                            src={company.logoUrl}
                            style={{ width: '100%', maxWidth: '200px' }}
                            alt={company.name}
                          />
                        </td>
                        <td>
                          Invoice #: {invoice.id}<br />
                          Created: {formatDate(invoice.createdDate)}<br />
                          {invoice.paidDate ? (
                            <div>Paid: {formatDate(invoice.paidDate)}</div>
                          ) : (
                            <div>
                              Due: {formatDate(invoice.dueDate)}
                            </div>
                          )}
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
                        <td>
                          <div><strong>Bill From:</strong></div>
                          <EntityInfo entity={company} />
                        </td>
                        <td>
                          <div><strong>Bill To:</strong></div>
                          <EntityInfo entity={customer} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              {invoice.paymentMethod && [
                <tr className="heading" key="heading">
                  <td>Payment Method</td>
                  <td />
                </tr>,
                <tr className="details" key="details">
                  <td>{invoice.paymentMethod}</td>
                  <td />
                </tr>,
              ]}
              <tr className="heading">
                <td>
                  Invoice: {invoice.description}
                </td>
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
                <td>Total: {formatCurrency(totalAmount)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  );
}

Invoice.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
    logoUrl: PropTypes.string,
  }).isRequired,
  customer: PropTypes.shape({}).isRequired,
  invoice: PropTypes.shape({
    createdDate: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
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
  }).isRequired,
  lang: PropTypes.string,
};

Invoice.defaultProps = {
  lang: 'en_US',
};
