import React, { useState } from 'react';

import BgImg from '../BgImg';
import Content from '../Content';


import './index.css';


const Project = props => {
  const { project } = props;

  const { img } = project;

  const [ imgToDisplay, setImgToDisplay ] = useState(
    // Default img should be img (if img is not arr) but if img
    // is arr, then the first item of arr is default img
    Array.isArray(img) ? img[0] : img
  );


  return (
    <div className="Project">
      <BgImg imgSrc={imgToDisplay}/>

      <Content
        projectData={project}
      />

    </div>
  )
}

export default Project;