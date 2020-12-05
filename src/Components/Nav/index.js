import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { Collapse } from '@material-ui/core';

import Links from './links';

import useScrollPosition from '../../hooks/useScrollPosition';
import useWindowSize from '../../hooks/useWindowSize';

import './index.css';


const Nav = props => {
  const path = window.location.pathname // montychoy.com/{path}
      .replace("/", "")
      .toLowerCase();

  // Background color opacity based on scroll position and height
  const scrollPosition = useScrollPosition()
  const { height, width } = useWindowSize();

  const [ bgOpacity, setBgOpacity ] = useState(0);

  useEffect(() => {
    const maxOpacity = 0.95;   // Max opacity slightly clear 

    // If scroll too far, bg opacity just max
    if (scrollPosition/height > maxOpacity) {
      setBgOpacity(maxOpacity);
    } else {
      setBgOpacity(scrollPosition/height);
    }
  }, [scrollPosition, height]);


  // Hamburger menu state
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);


  // If on a blog page, links to anything in main will be links to that section
  if (path === "blog") {
    console.log("rendering blog")

    return (
      <div id="Nav" className="flex-container-horizontally-center">
        {["home", "about", "experience", "projects", "blog"].map(link => {
          return (
            <p className="text-center mouse-on-hover">
              <Link to={"/" + link}>{link}</Link>
            </p>
          )
        })}
  
      </div>
    )
  // If on a main page, links to main will just be scrollto that section
  } else {
    console.log("rendering main")

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
          <div className="mobile flex-container-horizontally-center flex-container-vertically-center">
            <p style={{ margin: 0, flexGrow: 1 }} className="mouse-on-hover">
              Monty Choy
            </p>
            <HamburgerMenu
              isOpen={isMenuOpen}
              menuClicked={() => setIsMenuOpen(prev => !prev)}
              className="mouse-on-hover"
              width={18}
              height={15}
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
  
}

export default Nav;