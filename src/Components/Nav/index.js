import React from 'react';
import { Link } from 'react-router-dom';


import './index.css';


const Nav = props => {
  return (
    <div id="Nav" className="flex-container-horizontally-center">
      {["home", "about", "experience", "projects", "blog"].map(link => {
        return (
          <p className="text-center"><Link to={"/" + link}>{link}</Link></p>
        )
      })}

    </div>
  )
}

export default Nav;