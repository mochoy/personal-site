import React from 'react';

import BgImg from '../BgImg';
import Content from '../Content';


import './index.css';


const Project = props => {
  const { project } = props;

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

  return (
    <div className="Project">
      <BgImg imgSrc={img}/>

      <Content
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
  )
}

export default Project;