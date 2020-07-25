import React from 'react';

import Icons from '../Icons';
import Links from '../Links';


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
            open={open}
            files={files}
          />
          
          <BgImg imgSrc={img}/>
        </div>
      </div>
    )
  }

};

const BgImg = props => {
  const { imgSrc } = props;

  return (
    <div className="bg-img"
      style={{
        backgroundImage: 'url(' + require(`../../../assets/images/projects/${imgSrc}`)
      }}
    />
  )
}

const Content = props => {
  const { direction, 
    title, 
    by, 
    date, 
    event, 
    prize, 
    description, 
    open, 
    files } = props;

  return (
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
  )
}

export default FeaturedProject;
