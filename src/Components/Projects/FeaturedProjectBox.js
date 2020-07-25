import React from 'react';

import Icons from './Icons';
import Links from './Links';

const FeaturedProjectBox = props => {
  const { project, index } = props;

  const {
    img, 
    title, 
    by, 
    date, 
    event, 
    prize, 
    description,
    links } = project;

  const { open, files } = links;


  // Refers to text on left or right of text
  const direction = index % 2 === 1 ? "left" : "right";

  

  return (
    <div key={index}
      className={`FeaturedProject ${direction} horizontally-center`} 
    >
      {/* Left box */}
      { direction === "right" &&
        <div className="flex-container-horizontally-center">
          <div className="bg-img"
            style={{
              backgroundImage: 'url(' + require(`../../assets/images/projects/${img}`)
            }}
          />
          <div className="content">
            <h2>{title}</h2>

            <Icons direction={direction} 
              by={by} 
              date={date} 
              event={event} 
              prize={prize}
            />

            <p>{description}</p>

            <Links open={open} files={files} direction={direction}/>
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
  )
}

export default FeaturedProjectBox;
