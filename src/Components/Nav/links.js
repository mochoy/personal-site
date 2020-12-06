import React from 'react';
import { Link } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';

import { scrollToOffset } from '../../consts';
import uppercaseFirstChar from '../../helpers/uppercaseFirstChar';


const Links = props => {

  return (
    <div id="Links" className="flex-container-horizontally-center">
      {["home", "about", "experience", "projects"].map(link => {
        return (
          <p className="text-center mouse-on-hover" 
            onClick={() => 
              scrollToElement(
                `#${uppercaseFirstChar(link)}`, 
                { offset: scrollToOffset } 
              )
            }
          >
            <a href={link}>{link}</a>
          </p>
        )
      })}
      <p className="text-center mouse-on-hover"><Link to={"/blog"}>Blog</Link></p>
    </div>
  )
}

export default Links;