import React from 'react';

import SmallSelectImgs from './SmallSelectImgs';
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

  // If there are links, destructure them into open and files
  const { open, files } = !!links ? links : {};

  return (
    <div className="Content">
      
      <SmallSelectImgs
        hasMultipleImgs={hasMultipleImgs}
        imgs={imgs}
        imgSrcIndex={imgSrcIndex}
        setImgToDisplay={setImgToDisplay}
        title={title}
      />

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
      
      <LinksAndCategories 
        direction={direction} 
        title={title}
        open={open} 
        files={files} 
        categories={categories}
      />
      
    </div>
  )
};

export default Content;