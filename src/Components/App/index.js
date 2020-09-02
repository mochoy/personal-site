import React, { createContext } from 'react';
import ReactGA from 'react-ga';
import scrollToElement from 'scroll-to-element';
import VisibilitySensor from 'react-visibility-sensor';

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
    testMode: true,    // Uncomment/set to false if dont want data sent to ga
    siteSpeedSampleRate: 100
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
      <div className="App">
        <VisibilitySensor 
          partialVisibility={true} 
          onChange={ isVisible => sectionVisited(isVisible, "Home") }
        >
          <Home/>
        </VisibilitySensor>

        <VisibilitySensor 
          partialVisibility={true} 
          onChange={ isVisible => sectionVisited(isVisible, "About") }
        >
          <About
            logosData={logos}
            buzzwords={buzzwords}
          />
        </VisibilitySensor>
        
        <VisibilitySensor 
          partialVisibility={true} 
          onChange={ isVisible => sectionVisited(isVisible, "Experience") }
        >
          <Experience
            experienceData={experience}
          />
        </VisibilitySensor>

        <VisibilitySensor 
          partialVisibility={true} 
          onChange={ isVisible => sectionVisited(isVisible, "Projects") }
        >
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
        </VisibilitySensor>

        <VisibilitySensor 
          partialVisibility={true} 
          onChange={ isVisible => sectionVisited(isVisible, "Footer") }
        >
          <Footer/>
        </VisibilitySensor>

      </div>
    </ReactGACtx.Provider>
    
  );
}

export default App;
