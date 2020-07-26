import React from 'react';

import FeaturedProject from './FeaturedProject';

import './index.css';


const Projects = props => {
  const { projectsData } = props;

  return (
    <section id="Projects" className="section">
      <div className="section-content">
        <div className="section-title-container flex-container-horizontally-center flex-container-vertically-center">
          <h1>Projects</h1>
          <p style={{marginLeft: "0.5em"}}>
            {`(${projectsData.length})`}
          </p>
        </div>

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

    </section>
  )
};

export default Projects;