import React from 'react';
import { Link } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';

import { scrollToOffset } from '../../consts';
import uppercaseFirstChar from '../../helpers/uppercaseFirstChar';
import useIsOnBlogPath from '../../hooks/useIsOnBlogPath';


const Links = props => {
  const { onLinkClick } = props;

  const isOnBlogPath = useIsOnBlogPath();

  return (
    <div id="Links" className="flex-container-horizontally-center">
      {["home", "about", "experience", "projects"].map((link, i) => {
        return (
          <p className="text-center mouse-on-hover" 
            key={i}
            onClick={e => {
              onLinkClick(e);
              
              // Scroll to corresponding element if not on blog path
              if (!isOnBlogPath) {
                scrollToElement(
                  `#${uppercaseFirstChar(link)}`, 
                  { offset: scrollToOffset } 
                );
              }
            }}
          >
            { isOnBlogPath && <Link to={`/${link}`}>{link}</Link> }
            { !isOnBlogPath && link }
          </p>
        )
      })}
      <p className="text-center mouse-on-hover" onClick={onLinkClick}>
        <Link to={"/blog"}>Blog</Link>
      </p>
    </div>
  )
}

export default Links;