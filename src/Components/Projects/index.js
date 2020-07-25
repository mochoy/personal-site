import React from 'react';

import FeaturedProject from './FeaturedProject';

import './index.css';


const Projects = props => {
  const { projectsData } = props;

  return (
    <section id="Projects" className="section">
      <div className="section-content">
        <h1 className="section-title">Projects</h1>

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