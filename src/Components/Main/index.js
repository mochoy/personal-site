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
  const ReactGA = useContext(ReactGACtx);

  return (
    <div id="Main">
      <VisibilitySensor 
        partialVisibility={true} 
        onChange={ isVisible => ReactGA.custom.sectionVisited(isVisible, "Home") }
      >
        <Home/>
      </VisibilitySensor>

      <VisibilitySensor 
        partialVisibility={true} 
        onChange={ isVisible => ReactGA.custom.sectionVisited(isVisible, "About") }
      >
        <About
          logosData={logos}
          buzzwords={buzzwords}
        />
      </VisibilitySensor>
      
      <VisibilitySensor 
        partialVisibility={true} 
        onChange={ isVisible => ReactGA.custom.sectionVisited(isVisible, "Experience") }
      >
        <Experience
          experienceData={experience}
        />
      </VisibilitySensor>

      <VisibilitySensor 
        partialVisibility={true} 
        onChange={ isVisible => ReactGA.custom.sectionVisited(isVisible, "Projects") }
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
    </div>
  );
};

export default Main;