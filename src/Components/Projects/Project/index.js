import React from 'react';

import BgImg from '../BgImg';
import Content from '../Content';


import './index.css';


const Project = props => {
  const { project } = props;

  const { img } = project;


  return (
    <div className="Project">
      <BgImg imgSrc={img}/>

      <Content
        projectData={project}
      />

    </div>
  )
}

export default Project;