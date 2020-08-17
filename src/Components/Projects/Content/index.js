import React from 'react';

import Icons from './Icons';
import LinksAndCategories from './LinksAndCategories';


const Content = props => {
  const { direction,
    projectData,

    // Should only be used if multiple imgs, these vals are used for displaying
    // and selecting img preview
    hasMultipleImgs,
    imgs,
    imgSrcIndex } = props;

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
        <div className="flex-container-horizontally-center">
          { imgs.map((img, index) => {
            
              return (
                <div>
                  <img className="small-select-img"
                    src={ require(`assets/images/projects/${img}`) }
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