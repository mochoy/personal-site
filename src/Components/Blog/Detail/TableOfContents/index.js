import React from 'react';

import './index.css';


const TableOfContents = props => {
  const { tableOfContents } = props;

  console.log(tableOfContents);

  return (
    <div id="TableOfContents">
      ToC
    </div>
  );
};

export default TableOfContents;