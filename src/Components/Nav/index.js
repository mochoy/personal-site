import React from 'react';
import { Link } from 'react-router-dom';

import scrollToElement from 'scroll-to-element';

import uppercaseFirstChar from '../../helpers/uppercaseFirstChar';

import './index.css';


const Nav = props => {
  const path = window.location.pathname // montychoy.com/{path}
      .replace("/", "")
      .toLowerCase();

  console.log(path)


  // If on a blog page, links to anything in main will be links to that section
  if (path === "blog") {
    console.log("rendering blog")

    return (
      <div id="Nav" className="flex-container-horizontally-center">
        {["home", "about", "experience", "projects", "blog"].map(link => {
          return (
            <p className="text-center mouse-on-hover"><Link to={"/" + link}>{link}</Link></p>
          )
        })}
  
      </div>
    )
  // If on a main page, links to main will just be scrollto that section
  } else {
    console.log("rendering main")

    return (
      <div id="Nav" className="flex-container-horizontally-center">
        {["home", "about", "experience", "projects"].map(link => {
          return (
            <p className="text-center mouse-on-hover" 
              onClick={() => scrollToElement(`#${uppercaseFirstChar(link)}`)}
            >
              <a>{link}</a>
            </p>
          )
        })}
        { /* <p className="text-center"><Link to={"/blog"}>Blog</Link></p> */}
      </div>
    )
  }
  
}

export default Nav;