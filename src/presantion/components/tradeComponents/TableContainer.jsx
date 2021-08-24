import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const TableContainer = ({ results }) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(results);
  return (
    <div>
      hello wolrd
      {console.log(data, 'state')}
    </div>
  );
};
export default TableContainer;
