import React from 'react';
import scrollToElement from 'scroll-to-element';

import uppercaseFirstChar from '../../helpers/uppercaseFirstChar';


const Links = props => {
  
  return (
    <div id="Links" className="flex-container-horizontally-center">
      {["home", "about", "experience", "projects", "blog"].map(link => {
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

export default Links;