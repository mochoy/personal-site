import React, { useContext } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { ReactGACtx } from '../App';

import './index.css';


const Footer = props => {
  const ReactGA = useContext(ReactGACtx);

  return (
    <VisibilitySensor 
      partialVisibility={true} 
      onChange={ isVisible => ReactGA.custom.sectionVisited(isVisible, "Footer") }
    >
      <div id="Footer">
        <p>Dope home image credit IG: robertklim</p>
        <p>Blog cover image credit: Andrew Neel</p>
        <p className="text-center">Monty Choy</p>
        <p className="text-center">2017 - 2021</p>
      </div>
    </VisibilitySensor>
  );
};

export default Footer;