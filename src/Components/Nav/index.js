import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { Collapse } from '@material-ui/core';

import Links from './Links';

import scrollToElement from 'scroll-to-element';

import useWindowSize from '../../hooks/useWindowSize';
import useOpacityBasedOnScrollPosition from '../../hooks/useOpacityBasedOnScrollPosition';
import useIsOnBlogPath from '../../hooks/useIsOnBlogPath';
import useIsOnBlogDetailPath from '../../hooks/useIsOnBlogDetailPath';

import './index.css';


const Nav = props => {
  const { width } = useWindowSize();

  const maxBgOpacity = 0.95;
  const bgOpacity = useOpacityBasedOnScrollPosition(maxBgOpacity);

  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  
  const isOnBlogPath = useIsOnBlogPath();
  const isOnBlogDetailPath = useIsOnBlogDetailPath();

  return (
    <div id="Nav"
      style={{
        backgroundColor: `rgba(40, 44, 52, ${ isOnBlogDetailPath ? maxBgOpacity : bgOpacity })`
      }}
    >
      { width > 720 &&  // Show only links for desktop
        <Links onLinkClick={() => setIsMenuOpen(false)}/>
      }

      { width < 720 &&  // Show mobile stuff
        <div className="mobile flex-container-horizontally-center flex-container-vertically-center">
          <p id="name-txt" className="mouse-on-hover"
            onClick={ () => {
              setIsMenuOpen(false);
              scrollToElement("#Home"); 
          }}
          >
            { isOnBlogPath && <Link to={"/"}>Monty Choy</Link> }
            { !isOnBlogPath && "Monty Choy" }
          </p>

          <HamburgerMenu
            isOpen={isMenuOpen}
            menuClicked={() => setIsMenuOpen(prev => !prev)}
            className="mouse-on-hover"
            width={23}
            height={20}
            strokeWidth={1}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
          />

          <Collapse in={isMenuOpen}>
            <Links onLinkClick={() => setIsMenuOpen(false)}/>
          </Collapse>

        </div>
      }
      
    </div>
  )
  
}

export default Nav;