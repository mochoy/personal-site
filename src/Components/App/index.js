import React, { createContext } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Nav from '../Nav';
import Main from '../Main';
import Blog from '../Blog';
import BlogDetail from '../Blog/Detail';
import NotFound from '../NotFound';
import Footer from '../Footer';


import './index.css';

// test pat

const initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_KEY, {
    debug: false,       // Set to fale to disable logs
    testMode: true,    // Uncomment/set to false if dont want data sent to ga
    // siteSpeedSampleRate: 100
  });

  ReactGA.pageview(window.location.pathname + window.location.search);
};


// Custom GA stuff that will be tacked onto ReactGA that gets passed through contexts
ReactGA.custom = {
  // Called from VisibilitySensor onChange, if isVisible === true, then that 
  // section has been visited, so send an event to GA via GA event
  sectionVisited: (isVisible, section) => {
    if (isVisible) {
      ReactGA.event({
        category: 'Section',
        action: "Visited",
        label: section,
        nonInteraction: true
      });
    }
  }  
}


export const ReactGACtx = createContext(ReactGA);


const App = () => {
  React.useEffect(() => {
    initGA();
  }, []);

  return (
    <ReactGACtx.Provider value={ReactGA}>
      <BrowserRouter onUpdate={() => ReactGA.pageview(window.location.hash)}>
        <div className="App">
          <Nav/>
          
          <Switch>
            {/* Route to main */}
            <Route 
              exact path={["/", "/home", "/about", "/experience", "/projects"]}
              render = {(props) => (
                <Main {...props}/>
              )} 
            />

            {/* Route to blog */}
            <Route 
              exact path="/blog" 
              render = {(props) => (
                <Blog {...props}/>
              )} 
            />

            {/* Route to blog detail */}
            <Route 
              exact path="/blog/:id" 
              render = {(props) => (
                <BlogDetail {...props}/>
              )} 
            />

            {/* Route to 404 Not Found */}
            <Route 
              exact path="/404" 
              render = {(props) => (
                <NotFound {...props}/>
              )} 
            />

            {/* Redirect random/broken paths to main */}
            <Route 
              path="/*" 
              render = {() => (
                <Redirect to="/" />
              )} 
            />

          </Switch>

          <Footer/>

        </div>
      </BrowserRouter>
    </ReactGACtx.Provider>
  );
}

export default App;
