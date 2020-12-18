import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from '@material-ui/core';
import Scrollspy from 'react-scrollspy'

import scrollToElement from 'scroll-to-element';

import { scrollToOffset } from '../../../../consts';

import './index.css';



const TableOfContents = props => {
  const { tableOfContents } = props;

  // Array of all toc items in order of appearance
  let tocItems = [];

  // Recurisively renders all links in a ToC object
  const renderToCLinks = (node, i) => {
    const { value, headingHierarchy, url, children } = node;

    return (
      <React.Fragment key={i}>
        <Link to={url}
          onClick={() => scrollToElement(url, { offset: scrollToOffset })}
        >
          { renderToCText(value, headingHierarchy, url) }
        </Link>

        {children.map(renderToCLinks)}
      </React.Fragment>
      
    )
  };

  // Renders appropriate h-tag for ToC based on heading hierarchy
  const renderToCText = (value, headingHierarchy, url) => {
    tocItems.push(url.replace("#", ""));

    switch (headingHierarchy) {
      case 1: 
        return <h1><p>{value}</p></h1>
      case 2: 
        return <h2><p>{value}</p></h2>
      case 3: 
        return <h3><p>{value}</p></h3>
      case 4: 
        return <h4><p>{value}</p></h4>
      default: 
        return;
    }
  };

  console.log(tableOfContents)

  // Flatten table of contents into a single array of objs so no recursion is 
  // needed to render anything. Scrollspy seems to have trouble dealing with
  // nested elements
  const flattenedTableOfContents = (() => {
    let flattenedTableOfContents = [];

    tableOfContents.forEach(node => {
      const pushNode = node => {
        // Push node itself
        flattenedTableOfContents.push(node);

        // Push all of node's children
        node.children.forEach(childNode => pushNode(childNode))
      };

      pushNode(node);
      
    });

    return flattenedTableOfContents;

  })();

  console.log(flattenedTableOfContents)

  // Actual jsx for ToC items
  // Need to generate jsx before render to populate tocItems that's used in 
  // scrollspy
  const tocLinksJsx = tableOfContents.map(renderToCLinks);

  console.log(tocLinksJsx)

  return (
    <Drawer variant="permanent" open={true} anchor="right">
      <div id="TableOfContents">
        <h3>Contents</h3>

        <div id="links-container">
          <Scrollspy items={tocItems}
            currentClassName="ugly"
            onUpdate={a => {
              console.log("a: ", a)
            }}
          >
            {tocLinksJsx}
          </Scrollspy>
        </div>

      </div>
    </Drawer>
  );
};



export default TableOfContents;