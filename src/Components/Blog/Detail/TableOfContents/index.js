import React, { useContext } from 'react';
import { Drawer } from '@material-ui/core';
import Scrollspy from 'react-scrollspy'

import scrollToElement from 'scroll-to-element';

import { scrollToOffset } from '../../../../consts';
import { ReactGACtx } from '../../../App';


import './index.scss';


const TableOfContents = props => {
  const { tableOfContents } = props;

  const ReactGA = useContext(ReactGACtx);

  // All ToC items, including one manually added for the intro
  const tocItems = [{
    value: "Intro",       // Text in ToC
    url: "#title",        // id of item to watch/spy, id of item to scroll to
    headingHierarchy: 1   // 'hierarchy' depth, how much to indent in TOC
  }, ...tableOfContents];

  // Array of all ids of toc items in order of appearance, corresponds to id's  
  // of header items
  let tocItemsId = tocItems.map(tocItem => tocItem.url.replace("#", ""));

  return (
    <Drawer variant="permanent" open={true} anchor="right">
      <div id="TableOfContents">

        <div id="links-container">
          <Scrollspy items={tocItemsId}
            currentClassName="selected-toc-item"
          >
             { tocItems.map((tocItem, i) => {
                const { value, url, headingHierarchy } = tocItem

                return (
                  <a href={url.replace("#", "")} key={i}
                    className={`text-unfocused-grey no-style-link text-hover-grey hh${headingHierarchy}`}
                    onClick={e => {
                      e.preventDefault();
                      scrollToElement(url, { offset: scrollToOffset });

                      ReactGA.event({
                        category: 'Blog Post',
                        action: 'Click Table of Contents',
                        label: `${value}`
                      });
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