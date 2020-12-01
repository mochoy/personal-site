import React, { useContext, useEffect, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { InView } from 'react-intersection-observer';
import scrollToElement from 'scroll-to-element';

import Home from '../Home';
import About from '../About';
import Experience from '../Experience';
import Projects from '../Projects';

import { ReactGACtx } from '../App';

import uppercaseFirstChar from '../../helpers/uppercaseFirstChar';

import logos from '../../assets/data/logos.js';
import buzzwords from '../../assets/data/buzzwords.js';
import experience from '../../assets/data/experience'; 
import projects from '../../assets/data/projects'; 


import './index.css';


const Main = props => {  
  const ReactGA = useContext(ReactGACtx);

  useEffect(() => {
    const path = props.match.path // montychoy.com/{path}
      .replace("/", "")
      .toLowerCase();

    // Wait 1 sec to scroll to make sure everything is properly rendered to
    // ensure smooth scrolling all the way down to the component
    setTimeout(() => {
      // if pathname specified, scroll to it 
      if (path.length > 0) {
        const idOfComponentToScrollTo = uppercaseFirstChar(path);

        scrollToElement(`#${idOfComponentToScrollTo}`)
      }
    }, 500)

  });

  const [ isHomeVisible, setIsHomeVisible ] = useState(true)

  console.log(isHomeVisible)

  return (
    <div id="Main">
      <VisibilitySensor 
        partialVisibility={true} 
        onChange={ isVisible => {
          ReactGA.custom.sectionVisited(isVisible, "Home")
        } }
      >
        
        <InView as="div" onChange={(inView, entry) => setIsHomeVisible(inView)}>
          <Home/>
        </InView>


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