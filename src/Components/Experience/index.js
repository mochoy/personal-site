import React from 'react';

import './index.css';


const Experience = props => {
  const { experienceData } = props;

  return (
    <section id="Experience" className="section-grey">
      <div className="section-content">
        <h1 className="section-title">Experience</h1>

        {
          experienceData.map((expData, key) => {
            const { company, title, team, location, date, content} = expData;

            const contentPoints = content.map((contentPoint, contentKey) => {
              return (
                <li key={contentKey}>{contentPoint}</li>
              )
            });

            return (
              <div key={key}>
                { /* Exp item for desktop */ }
                <div className="experience-item-desktop flex-container-horizontally-center">
                  <div className="left">
                    <h3>{company}</h3>
                    <p>{location}</p>
                    <p>{date}</p>
                  </div>

                  <div className="right">
                    <h4>{title}</h4>
                    <p>{team}</p>
                    {contentPoints}
                  </div>
                </div>

                { /* Exp item for mobile */ }
                <div className="experience-item-mobile">
                  <h3>{company}</h3>
                  <h4>{title}</h4>
                  <p>{date}</p>
                  {contentPoints}
                </div>
              </div>
            )
          })
        }

      </div>
    </section>
  )
};

export default Experience;