import React, { createContext } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';
import VisibilitySensor from 'react-visibility-sensor';

import Main from '../Main';
import Blog from '../Blog';
import Footer from '../Footer';


import './index.css';



const initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_KEY, {
    debug: true,
    testMode: true,    // Uncomment/set to false if dont want data sent to ga
    // siteSpeedSampleRate: 100
  });

  ReactGA.pageview(window.location.pathname + window.location.search);
};

// Called from VisibilitySensor onChange, if isVisible === true, then that 
// section has been visited, so send an event to GA via GA event
const sectionVisited = (isVisible, section) => {
  if (isVisible) {
    ReactGA.event({
      category: 'Section',
      action: "Visited",
      label: section,
      nonInteraction: true
    });
  }
}


export const ReactGACtx = createContext(ReactGA);


const App = () => {
  // Need to wrap scroll event in useEffect, idk why
  React.useEffect(() => {
    initGA();

    const pathname = window.location.pathname // montychoy.com/{pathname}
      .replace("/", "")
      .toLowerCase();

    // if pathname specified, scroll to it 
    if (pathname.length > 0) {
      scrollToElement(`#${pathname}`)
    }
  }, []);


  return (
    <ReactGACtx.Provider value={ReactGA}>
      <BrowserRouter onUpdate={() => ReactGA.pageview(window.location.hash)}>
        <div className="App">
          <Switch>
            {/* Route to main */}
            <Route 
              exact path="/" 
              render = {
                (props) => (
                  <Main {...props} 

                  />
                )
              } 
            />

            {/* Route to blog */}
            <Route 
              exact path="/blog" 
              render = {
                (props) => (
                  <Blog {...props} 

                  />
                )
              } 
            />

          </Switch>
          
          

          <VisibilitySensor 
            partialVisibility={true} 
            onChange={ isVisible => sectionVisited(isVisible, "Footer") }
          >
            <Footer/>
          </VisibilitySensor>

        </div>
      </BrowserRouter>
    </ReactGACtx.Provider>
  );
}

export default App;
