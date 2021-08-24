import React from 'react';

// eslint-disable-next-line react/prop-types
const Table = ({ symbol, title }) => (
  <tr>
    <td>{symbol}</td>
    <td>{title}</td>
    <td>
      {' '}
      <button type="button" className="card-button"> Show Stock</button>
      {' '}
    </td>
  </tr>
);

export default Table;
