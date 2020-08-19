import React from 'react';


const SmallSelectImgs = props => {
  const {
    hasMultipleImgs,
    imgs,
    imgSrcIndex,
    setImgToDisplay
  } = props;

  if (hasMultipleImgs) {
    return (
      <div className="SmallSelectImgs flex-container-horizontally-center">
        { imgs.map((img, index) => {
            const isSelected = (index === imgSrcIndex);
            const selectedClassName = isSelected ? "selected" : "";

            return (
              <div key={index}>
                <img onClick={() => setImgToDisplay(imgs[index])}
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