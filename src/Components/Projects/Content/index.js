import React from 'react';

import Icons from './Icons';
import LinksAndCategories from './LinksAndCategories';


import './index.css';


const Content = props => {
  const { direction,
    projectData,

    // Should only be used if multiple imgs, these vals are used for displaying
    // and selecting img preview
    hasMultipleImgs,
    imgs,
    imgSrcIndex,
    setImgToDisplay } = props;

  const { title, 
    by, 
    date, 
    event, 
    prize, 
    description, 
    builtWith,
    links,
    categories} = projectData;

  const { open, files } = !!links ? links : {};

  return (
    <div className="Content">

      { /* For small imgs */ }
      { hasMultipleImgs && 
        <div className="small-select-imgs flex-container-horizontally-center">
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

      }

      <h2>{title}</h2>

      <Icons direction={direction} 
        by={by} 
        date={date} 
        event={event} 
        prize={prize}
      />

      <p>{description}</p>

      <div className="flex-container-horizontally-center">
        { !!builtWith && 
          builtWith.map((word, index) => (
            <p key={index} className="built-with-text">
              {word}
            </p>)
          )
        }
      </div>
      
      <LinksAndCategories direction={direction} 
        open={open} 
        files={files} 
        categories={categories}
      />
      
    </div>
  )
};

export default Content;