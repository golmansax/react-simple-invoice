import moment from 'moment';
import numeral from 'numeral';

export function formatDate(date) {
  return moment(date).format('MMMM Do, YYYY');
}

export function formatCurrency(amount, currency = '$') {
  const formatted =  numeral(amount).format(`0,0.00`);
  return `${currency}${formatted}`
}
