import React, { useContext } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Home from '../Home';
import About from '../About';
import Experience from '../Experience';
import Projects from '../Projects';

import { ReactGACtx } from '../App';


const Main = props => {
  
  const ReactGA = useContext(ReactGACtx);

  return (
    <div id="Main">
      Main
    </div>
  );
};

export default Main;