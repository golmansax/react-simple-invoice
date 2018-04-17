import moment from 'moment';
import numeral from 'numeral';

export function formatDate(date) {
	return moment(date).format('MMM D, YYYY');
}

export function formatCurrency(amount) {
  return numeral(amount).format('$0,0.00');
}
