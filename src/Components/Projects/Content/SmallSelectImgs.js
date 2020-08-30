import React, { useContext } from 'react';

import { ReactGACtx } from '../../App';


const SmallSelectImgs = props => {
  const {
    hasMultipleImgs,
    imgs,
    imgSrcIndex,
    setImgToDisplay
  } = props;

  const ReactGA = useContext(ReactGACtx);


  if (hasMultipleImgs) {
    return (
      <div className="SmallSelectImgs flex-container-horizontally-center">
        { imgs.map((img, index) => {
            const isSelected = (index === imgSrcIndex);
            const selectedClassName = isSelected ? "selected" : "";

            return (
              <div key={index}>
                <img onClick={() => {
                  ReactGA.event({
                    category: 'Project',
                    action: 'Big Img Carousel Small Img',
                    label: index
                  });

                  setImgToDisplay(imgs[index])
                }}
                  className={`small-select-img mouse-on-hover ${selectedClassName}`}
                  src={require(`assets/images/projects/${img}`)}
                  alt={img}
                />
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div/>
  )
}

export default SmallSelectImgs;