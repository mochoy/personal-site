import React from 'react';
import { Link } from 'react-router-dom';


import './index.css';


const Nav = props => {
  return (
    <div id="Nav">
      {["home", "about", "experience", "projects", "blog"].map(link => {
        return (
          <p><Link to={"/" + "link"}>{link}</Link></p>
        )
      })}

    </div>
  )
}

export default Nav;