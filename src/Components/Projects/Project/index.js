import React, { useState } from 'react';

import BgImg from '../BgImg';
import Content from '../Content';


import './index.css';


const Project = props => {
  const { project } = props;

  const { img } = project;

  const hasMultipleImgs = Array.isArray(img); 

  // Source of image to display, typically from project.img. This should be a 
  // string. 
  //
  // Using useState hook because if there's more than 1 img for a project (img 
  // is an arr), we want to be able to cycle between these images
  const [ imgToDisplay, setImgToDisplay ] = useState(
    // Default img should be img (if img is not arr) but if img
    // is arr, then the first item of arr is default img
    hasMultipleImgs ? img[0] : img
  );


  return (
    <div className="Project">
      <BgImg 
        imgSrc={imgToDisplay}
        setImgToDisplay={setImgToDisplay}

        hasMultipleImgs={hasMultipleImgs}

        imgs={img /* This should only be used if hasMultipleImgs is true */ }
        imgSrcIndex={ /* This should only be used if hasMultipleImgs is true */ 
          hasMultipleImgs 
            ? img.indexOf(imgToDisplay)
            : 0
        }
      />

      <Content
        projectData={project}
      />

    </div>
  )
}

export default Project;