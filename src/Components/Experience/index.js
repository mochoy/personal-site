import React from 'react';

import './index.css';


const Experience = props => {
  const { experienceData } = props;

  console.log(experienceData);

  return (
    <section id="Experience" className="section-dark">
      <div className="section-content">
        <h1 className="section-title">Experience</h1>
      </div>
    </section>
  )
};

export default Experience;