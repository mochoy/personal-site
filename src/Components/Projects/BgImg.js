import React from 'react';

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';


const BgImg = props => {
  const { imgSrc, hasMultipleImgs, setImgToDisplay } = props;

  if (hasMultipleImgs) {
    console.log("hasMultipleImgs")
  }

  return (
    <div className="bg-img"
      style={{
        backgroundImage: 'url(' + require(`../../assets/images/projects/${imgSrc}`)
      }}
    >
      { !!hasMultipleImgs &&
        <div className="flex-container">
          <div className="left-select mouse-on-hover flex-container-vertically-center">
            <FaArrowCircleLeft className="icon"/>
          </div>

          <div/>

          <div className="right-select mouse-on-hover  flex-container-vertically-center flex-container-right">
            <FaArrowCircleRight className="icon"/>
          </div>
        </div>
      }
      
    </div>
  )
}; 

export default BgImg;