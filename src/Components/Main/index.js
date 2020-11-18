import React, { useContext } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Home from '../Home';
import About from '../About';
import Experience from '../Experience';
import Projects from '../Projects';

import { ReactGACtx } from '../App';

import logos from '../../assets/data/logos.js';
import buzzwords from '../../assets/data/buzzwords.js';
import experience from '../../assets/data/experience'; 
import projects from '../../assets/data/projects'; 


import './index.css';


const Main = props => {
  const { children } = props;
  
  const ReactGA = useContext(ReactGACtx);

  console.log(ReactGA.custom)

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

  return (
    <div id="Main">
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

      { children }
    </div>
  );
};

export default Main;