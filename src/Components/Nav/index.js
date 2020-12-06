import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { Collapse } from '@material-ui/core';

import Links from './links';

import scrollToElement from 'scroll-to-element';

import useWindowSize from '../../hooks/useWindowSize';
import useOpacityBasedOnScrollPosition from '../../hooks/useOpacityBasedOnScrollPosition';

import './index.css';


const Nav = props => {
  const { width } = useWindowSize();
  const bgOpacity = useOpacityBasedOnScrollPosition(0.95);

  // Hamburger menu state
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  // Determine if on blog path or regular path
  const { pathname } = useLocation();
  const [ isOnBlogPath, setIsOnBlogPath ] = useState(true);

  useEffect(() => {
    setIsOnBlogPath(pathname.toLowerCase().includes("blog"))
  }, [pathname])

  
  return (
    <div id="Nav"
      style={{
        backgroundColor: `rgba(40, 44, 52, ${bgOpacity})`
      }}
    >
      { width > 550 &&  // Show only links for desktop
        <Links/>
      }

      { width < 550 &&  // Show mobile stuff
        <div className="mobile flex-container-horizontally-center flex-container-vertically-center"
          style={ isMenuOpen ? { paddingBottom: 0 } : {} }
        >
          <p id="name-txt" className="mouse-on-hover"
            onClick={ () => scrollToElement("#Home") }
          >
            <Link to={"/"}>Monty Choy</Link>
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
            <Links/>
          </Collapse>

        </div>
      }
      
    </div>
  )
  
}

export default Nav;