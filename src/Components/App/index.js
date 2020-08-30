import React, { createContext } from 'react';
import ReactGA from 'react-ga';
import scrollToElement from 'scroll-to-element';
import TrackVisibility from 'react-on-screen';

import Home from '../Home';
import About from '../About';
import Experience from '../Experience';
import Projects from '../Projects';
import Footer from '../Footer';

import logos from '../../assets/data/logos.js';
import buzzwords from '../../assets/data/buzzwords.js';
import experience from '../../assets/data/experience'; 
import projects from '../../assets/data/projects'; 


import './index.css';




const initGA = () => {       
  ReactGA.initialize('UA-128598718-1', {
    debug: true,
    // testMode: true,
    siteSpeedSampleRate: 100
  });

  ReactGA.pageview(window.location.pathname + window.location.search);
};


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
      <div className="App">
        <Home/>

        <TrackVisibility once offset={400}>
          <About
            logosData={logos}
            buzzwords={buzzwords}
          />
        </TrackVisibility>
        
        <TrackVisibility once offset={400}>
          <Experience
            experienceData={experience}
          />
        </TrackVisibility>

        <TrackVisibility once offset={400}>
          <Projects
            projectsData={
              projects.map((project, index) => {
                // Apply id to each project
                return {
                  id: Date.now() + index,
                  ...project
                }
              })
            }
          />
        </TrackVisibility>

        <TrackVisibility once offset={400}>
          <Footer/>
        </TrackVisibility>

      </div>
    </ReactGACtx.Provider>
    
  );
}

export default App;
