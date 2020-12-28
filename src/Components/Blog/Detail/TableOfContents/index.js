import React from 'react';
import { Drawer } from '@material-ui/core';
import Scrollspy from 'react-scrollspy'

import scrollToElement from 'scroll-to-element';

import { scrollToOffset } from '../../../../consts';

import './index.css';



const TableOfContents = props => {
  const { tableOfContents } = props;

  // Array of all toc items in order of appearance
  let tocItems = [];

  // Flatten table of contents into a single array of objs so no recursion is 
  // needed to render anything. Scrollspy seems to have trouble dealing with
  // nested elements
  const flattenedTableOfContents = (() => {
    let flattenedToCArr = [];

    tableOfContents.forEach(node => {
      const pushNode = node => {
        // Push node itself
        flattenedToCArr.push(node);

        // Push into arr to keep track of section items
        tocItems.push(node.url.replace("#", ""));


        // Push all of node's children
        node.children.forEach(childNode => pushNode(childNode))
      };

      pushNode(node);
      
    });

    return flattenedToCArr;

  })();


  return (
    <Drawer variant="permanent" open={true} anchor="right">
      <div id="TableOfContents">
        <h3>Contents</h3>

        <div id="links-container">
          <Scrollspy items={tocItems}
            currentClassName="ugly"
          >
             { flattenedTableOfContents.map((tocItem, i) => {
                const { value, url, headingHierarchy } = tocItem

                return (
                  <a href={url.replace("#", "")} key={i}
                    className={`hh${headingHierarchy}`}
                    onClick={e => {
                      e.preventDefault();
                      scrollToElement(url, { offset: scrollToOffset });
                    }}
                  >
                    {value}
                  </a>
                )
                
              }) }
          </Scrollspy>
        </div>

      </div>
    </Drawer>
  );
};



export default TableOfContents;