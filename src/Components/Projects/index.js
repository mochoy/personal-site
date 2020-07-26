import React from 'react';

import FeaturedProject from './FeaturedProject';
import Filter from './Filter';
import Project from './Project';

import './index.css';


const filterOptions = ["All", "Hardware", "Software"];

const Projects = props => {
  const { projectsData } = props;

  const [ filter, setFilter ] = React.useState("All");

  console.log(filter)

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
              <FeaturedProject
                project={project}
                index={index}

                key={index}
              />
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
          <div className="flex-container-horizontally-center">
            { projectsData
              .filter(project => !project.isFeatured)
              .map((project, index) => 
                <Project project={project} key={index}/>
              )
            }
          </div>
        </div>
          
      </div>

    </section>
  )
};

export default Projects;