import React from 'react';

import './index.css';


const Experience = props => {
  const { experienceData } = props;

  console.log(experienceData);

  return (
    <section id="Experience" className="section-grey">
      <div className="section-content">
        <h1 className="section-title">Experience</h1>

        {
          experienceData.map((expData, key) => {
            const { company, title, team, location, date, content} = expData;

            return (
              <div key={key}
                className="experience-item flex-container-horizontally-center"
              >
                <div className="left">
                  <h3>{company}</h3>
                  <p>{location}</p>
                  <p>{date}</p>
                </div>

                <div className="right">
                  <h4>{title}</h4>
                  <p>{team}</p>
                  {
                    content.map((contentPoint, contentKey) => {
                      return (
                        <li key={contentKey}>{contentPoint}</li>
                      )
                    })
                  }
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