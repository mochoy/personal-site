import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from '@material-ui/core';

import scrollToElement from 'scroll-to-element';

import { scrollToOffset } from '../../../../consts';

import './index.css';


// Renders appropriate h-tag for ToC based on heading hierarchy
const renderToCText = (value, headingHierarchy) => {
  switch (headingHierarchy) {
    case 1: 
      return <h1>{value}</h1>
    case 2: 
      return <h2>{value}</h2>
    case 3: 
      return <h3>{value}</h3>
    case 4: 
      return <h4>{value}</h4>
    default: 
      return;
  }
}

// Recurisively renders all links in a ToC object
const renderToCLinks = (node, i) => {
  const { value, headingHierarchy, url, children } = node;

  return (
    <div key={i}>
      <Link to={url} 
        onClick={() => scrollToElement(url, { offset: scrollToOffset })}
      >
        { renderToCText(value, headingHierarchy) }
      </Link>

      {children.map(renderToCLinks)}
    </div>
    
  )
};

const TableOfContents = props => {
  const { tableOfContents } = props;

  return (
    <Drawer variant="permanent" open={true} anchor="right">
      <div id="TableOfContents">
        <h1>Table of Contents</h1>
        <div id="links-container">
          {tableOfContents.map(renderToCLinks)}
        </div>
      </div>
    </Drawer>
  );
};

export default TableOfContents;