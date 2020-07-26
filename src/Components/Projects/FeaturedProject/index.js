import React from 'react';

import BgImg from '../BgImg';
import Content from '../Content';


import './index.css';


const FeaturedProject = props => {
  const { project, index } = props;

  const {
    img, 
    title, 
    by, 
    date, 
    event, 
    prize, 
    description,
    builtWith,
    links } = project;

  const { open, files } = links;

  // Refers to text on left or right of text
  const direction = index % 2 === 1 ? "left" : "right";


  if (direction === "right") {
    return (
      <div className={`FeaturedProject ${direction} horizontally-center`}>
        <div className="flex-container-horizontally-center">
          <BgImg imgSrc={img}/>

          <Content
            direction={direction}
            title={title}
            by={by}
            date={date} 
            event={event}
            prize={prize}
            description={description} 
            builtWith={builtWith}
            open={open}
            files={files}
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
            title={title}
            by={by}
            date={date} 
            event={event}
            prize={prize}
            description={description} 
            builtWith={builtWith}
            open={open}
            files={files}
          />
          
          <BgImg imgSrc={img}/>
        </div>
      </div>
    )
  }

};

export default FeaturedProject;
