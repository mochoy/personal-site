import React from 'react';


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
          <div className="left-select mouse-on-hover">
            
          </div>
          <div className="right-select mouse-on-hover"/>
        </div>
      }
      
    </div>
  )
}; 

export default BgImg;