import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { formatCurrency, formatDate } from './utils';

export default function EntityInfo({ entity }) {
  const { name, email, address } = entity;

  return (
    <div>
      {name && <div>{name}</div>}
      {address && address.map((line) => <div key={line}>{line}</div>)}
      {email && <a href={`mailto:${email}`}>{email}</a>}
    </div>
  );
}

EntityInfo.propTypes = {
  entity: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string.isRequired),
    ]),
  }),
};
