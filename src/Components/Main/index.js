import React, { useContext } from 'react';
import Home from '../Home';
import About from '../About';
import Experience from '../Experience';

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