import React, { useState, useContext } from 'react';
import scrollToElement from 'scroll-to-element';
import VisibilitySensor from 'react-visibility-sensor';
import { Collapse } from '@material-ui/core';
import FlipMove from 'react-flip-move';

import { ReactGACtx } from '../App';
import { isProd } from '../../helpers/isDev';

import FeaturedProject from './FeaturedProject';
// import CollapsibleTextTrigger from '../Functional/CollapsibleTextTrigger';
import Filter from './Filter';
import Project from './Project';


import './index.css';


const filterOptions = ["All", "Hardware", "Software", "Web", "Nerf", "Architecture"];

const Projects = props => {
  const { projectsData } = props;

  // const [ isMoreProjectsExpanded, setIsMoreProjectsExpanded ] = useState(true);
  const [ projectsToDisplay, setProjectsToDisplay ] = useState(projectsData);

  const [ filter, setFilter ] = React.useState(filterOptions[0]);

  const ReactGA = useContext(ReactGACtx);


  // Scroll to project specified in url 
  // Need to wrap scroll event in useEffect, idk why
  React.useEffect(() => {
    const pathname = window.location.pathname // montychoy.com/{pathname}
      .replace("/", "")
      .toLowerCase();

    // if pathname specified, scroll to it 
    if (pathname.length > 0) {
      scrollToElement(`#${pathname}`)
    }
  }, []);
  

  // Called from VisibilitySensor onChange, if isVisible === true, then that 
  // project has been visited, so send an event to GA via GA event
  const projectVisited = (isVisible, project) => {
    if (isVisible) {
      ReactGA.event({
        category: 'Project',
        action: 'Visited',
        label: project,
        nonInteraction: true
      });
    }
  }


  // Update projects to display when filter changes
  React.useEffect(() => {
    let newProjectsToDisplay;

    if (filter === filterOptions[0]) {    // "All" filter selected
      newProjectsToDisplay = projectsData;
    } else {    // Any other filter besides "All"
      const filterIndex = filterOptions.indexOf(filter);

      // Allow a project to pass filter if the selected filter is in that 
      // project's categories array 
      newProjectsToDisplay = projectsData.filter(
        project => project.categories.indexOf(filterOptions[filterIndex]) !== -1
      );
    }


    setProjectsToDisplay(newProjectsToDisplay);

  }, [ filter, projectsData ]);


  return (
    <section id="Projects" className="section">
      <div className="section-content">
        <div className="section-title-container flex-container-horizontally-center flex-container-vertically-center">
          <h1>Projects</h1>
          <p style={{marginLeft: "0.5em"}}>
            {`(${projectsData.length})`}
          </p>
        </div>

        <div id="featured-projects-container">
          {/* Featured projects */}
          { projectsData
            .filter(project => project.isFeatured)
            .map((project, index) => 
              <VisibilitySensor key={index}
                partialVisibility={true} 
                onChange={ isVisible => projectVisited(isVisible, project.title) }
              >
                <FeaturedProject
                  project={project}
                  index={index}
                />
              </VisibilitySensor>
            )
          }
        </div>

        <h2 className="text-center">
          More Projects
        </h2>
        
        <Collapse in={true}>
          <div id="more-projects-container">
            <Filter filter={filter} 
              setFilter={setFilter} 
              filterOptions={filterOptions}
            />

            {/* Regular projects */}
            <FlipMove className="flex-container-horizontally-center">
              { projectsToDisplay
                .filter(project => !project.isFeatured)   // Remove unfeatured projects
                .filter(project => isProd() ? !project.hideForProd: true )    // Remove non prod projects for prod
                .map(
                  (project) => {
                    const { id } = project;
                    return (
                      <div key={id}> 
                      {/* This div is needed to make sure height doesnt get messed up from react-flip */}
                      
                        <VisibilitySensor
                          partialVisibility={true} 
                          onChange={ isVisible => projectVisited(isVisible, project.title) }
                        >
                          <Project project={project}/>
                        </VisibilitySensor>
                      </div>
                      
                    )
                  }
                )
              }
            </FlipMove>
          </div>
        </Collapse>

      </div>
    </section>
  )
};

export default Projects;