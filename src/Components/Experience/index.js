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

            // If content is array (bullet points), render as bullet points, 
            // otherwise if just text, just render as paragraph
            const contentText = content.constructor === Array
              ? content.map((contentPoint, contentKey) => {
                  return (
                    <div key={contentKey} className="flex-container-left">
                      <span className="bullet">&#8226;</span>
                      <p className="bullet-points-text">{contentPoint}</p>
                    </div>
                  )
                })
              : content;

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
                    {contentText}
                  </div>
                </div>

                { /* Exp item for mobile */ }
                <div className="experience-item-mobile">
                  <h3>{company}</h3>
                  <h4>{title}</h4>
                  <p>{date}</p>
                  {contentText}
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