import React from 'react';

import './index.css';


const Projects = props => {
  const { projectsData } = props;

  console.log(projectsData)

  return (
    <section id="Projects" className="section">
      <div className="section-content">
        <h1 className="section-title">Projects</h1>
      </div>
    </section>
  )
};

export default Projects;