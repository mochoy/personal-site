import React, { useContext } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import { ReactGACtx } from '../../App';


import './index.css';


const BgImg = props => {
  const { imgSrc, 
    setImgToDisplay, 
    
    hasMultipleImgs, 
  
    // This should only be used if hasMultipleImgs is true/there are multiple 
    // images
    imgs,
    imgSrcIndex} = props;

  const ReactGA = useContext(ReactGACtx);


  return (
    <div className="bg-img"
      style={{
        backgroundImage: 'url(' + require(`../../../assets/images/projects/${imgSrc}`)
      }}
    >
      { !!hasMultipleImgs &&
        <div className="flex-container">

          { /* Only display btn to go left if img being displayed isnt first img */
            imgSrcIndex > 0 &&

            <div className="left-select mouse-on-hover flex-container-vertically-center"
              onClick={() => {
                ReactGA.event({
                  category: 'Project',
                  action: 'Big Img Carousel Arrow Btns',
                  label: "Left"
                });

                setImgToDisplay(imgs[imgSrcIndex - 1]);
              }}
            >
              <FaArrowCircleLeft className="go-left-img-icon icon"/>
            </div>
          }

          { /* Display dummy div if the left btn isn't visible to preserve spacing */ }
          { imgSrcIndex <= 0 && <div/> }

          { /* Center div to preserve spacing */ }
          <div/>


          { /* Only display btn to go right if img being displayed isnt last img */
            imgSrcIndex < imgs.length - 1 &&

            <div className="right-select mouse-on-hover  flex-container-vertically-center flex-container-right"
              onClick={() => {
                ReactGA.event({
                  category: 'Project',
                  action: 'Big Img Carousel Arrow Btns',
                  label: "Right"
                });

                setImgToDisplay(imgs[imgSrcIndex + 1]);
              }}
            >
              <FaArrowCircleRight className="go-right-img-icon icon"/>
            </div>
          }

          { /* Display dummy div if the right btn isn't visible to preserve spacing */ }
          { imgSrcIndex >= imgs.length - 1 && <div/> }

        </div>
      }
      
    </div>
  )
}; 

export default BgImg;