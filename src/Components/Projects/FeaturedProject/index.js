import React from 'react';

import BgImg from '../BgImg';
import Content from '../Content';


import './index.css';


const FeaturedProject = props => {
  const { project, index } = props;

  const { img } = project;

  
  // Refers to text on left or right of text
  const direction = index % 2 === 1 ? "left" : "right";


  if (direction === "right") {
    return (
      <div className={`FeaturedProject ${direction} horizontally-center`}>
        <div className="flex-container-horizontally-center">
          <BgImg imgSrc={img}/>

          <Content
            direction={direction}
            projectData={project}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className={`FeaturedProject ${direction} horizontally-center`}>
        <div className="flex-container-horizontally-center">
        <Content
            direction={direction}
            projectData={project}
          />
          
          <BgImg imgSrc={img}/>
        </div>
      </div>
    )
  }

};

export default FeaturedProject;
