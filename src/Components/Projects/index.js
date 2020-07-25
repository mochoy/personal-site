import React from 'react';

import FeaturedProjectBox from './FeaturedProjectBox';

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
              <FeaturedProjectBox
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