import React from 'react';

import './index.css';


const Projects = props => {
  const { projectsData } = props;

  console.log()

  return (
    <section id="Projects" className="section">
      <div className="section-content">
        <h1 className="section-title">Projects</h1>
      </div>

      {/* Featured projects */}
      {
        projectsData
          .filter(project => project.isFeatured)
          .map((project, key) => {
            const { title, by, event, img, date, description} = project;

            const direction = key % 2 === 0 ? "left" : "right";

            console.log(img)

            return (
              <div key={key}
                className={`featured-project-container ${direction} horizontally-center`} 
              >
                {
                  direction === "left" &&
                  <div className="flex-container-horizontally-center">
                    <img alt={title + "-img"}
                      src={require("../../assets/images/projects/" + img)} 
                    />
                    <div className="content">
                      <h2>{title}</h2>
                    </div>
                  </div>
                }
                {
                  direction === "right" &&
                  <div className="flex-container-horizontally-center">
                    <div className="content">
                      <h2>{title}</h2>
                    </div>
                    <img alt={title + "-img"}
                      src={require("../../assets/images/projects/" + img)} 
                    />
                  </div>
                }
                
                
              </div>
            );
          })
      }
    </section>
  )
};

export default Projects;