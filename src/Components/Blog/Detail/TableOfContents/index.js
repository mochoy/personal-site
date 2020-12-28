import React from 'react';
import { Drawer } from '@material-ui/core';
import Scrollspy from 'react-scrollspy'

import scrollToElement from 'scroll-to-element';

import { scrollToOffset } from '../../../../consts';

import './index.css';



const TableOfContents = props => {
  const { tableOfContents } = props;

  // Array of all toc items in order of appearance, corresponds to id's of 
  // header items
  let tocItems = tableOfContents.map(tocItem => tocItem.url.replace("#", ""));

  return (
    <Drawer variant="permanent" open={true} anchor="right">
      <div id="TableOfContents">
        <h3>Contents</h3>

        <div id="links-container">
          <Scrollspy items={tocItems}
            currentClassName="selected-toc-item"
          >
             { tableOfContents.map((tocItem, i) => {
                const { value, url, headingHierarchy } = tocItem

                return (
                  <a href={url.replace("#", "")} key={i}
                    className={`text-unfocused-grey no-style-link text-hover-grey hh${headingHierarchy}`}
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