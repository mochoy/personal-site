import React from 'react';

import Icons from './Icons';
import Links from './Links';


const Content = props => {
  const { direction, 
    title, 
    by, 
    date, 
    event, 
    prize, 
    description, 
    builtWith,
    open, 
    files } = props;

  return (
    <div className="content">
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
      

      <Links open={open} files={files} direction={direction}/>
    </div>
  )
};

export default Content;