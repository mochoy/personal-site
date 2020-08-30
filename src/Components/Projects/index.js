import React, { useContext } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import FlipMove from 'react-flip-move';

import { ReactGACtx } from '../App';

import FeaturedProject from './FeaturedProject';
import Filter from './Filter';
import Project from './Project';


import './index.css';


const filterOptions = ["All", "Hardware", "Software", "Web", "Nerf", "Architecture"];

const Projects = props => {
  const { projectsData } = props;

  const [ projectsToDisplay, setProjectsToDisplay ] = React.useState(projectsData);

  const [ filter, setFilter ] = React.useState(filterOptions[0]);

  const ReactGA = useContext(ReactGACtx);

  // Called from VisibilitySensor onChange, if isVisible === true, then that 
  // project has been visited, so send an event to GA via GA event
  const projectVisited = (isVisible, section) => {
    if (isVisible) {
      ReactGA.event({
        category: 'Project Visited',
        action: `${section} project visited`,
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
          <h2 className="text-center">Featured Projects</h2>

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
        
        <div id="more-projects-container">
          <h2 className="text-center">More Projects</h2>

          <Filter filter={filter} 
            setFilter={setFilter} 
            filterOptions={filterOptions}
          />

          {/* Regular projects */}
          <FlipMove className="flex-container-horizontally-center">
            { projectsToDisplay
              .filter(project => !project.isFeatured)
              .map(
                (project) => {
                  const { id } = project;
                  return (
                    <VisibilitySensor key={id}
                      partialVisibility={true} 
                      onChange={ isVisible => projectVisited(isVisible, project.title) }
                    >
                      <Project project={project}/>
                    </VisibilitySensor>
                  )
                }
              )
            }
          </FlipMove>
        </div>
          
      </div>

    </section>
  )
};

export default Projects;