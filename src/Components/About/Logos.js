import React from 'react';

const Logos = props => {
  const { logosData } = props;
  
  return (
    <div id="logos-container" className="flex-container-vertical">
      {
        logosData.map((logoData, key) => {
          return (
            <a href={logoData.link} 
              className="logo cursor-on-hover"
              target="_blank" 
              rel="noopener noreferrer"
              key={key}
            >
              <img 
                className="grow-on-hover" 
                src={require(`assets/images/logos/${logoData.imgSrc}`)} 
                alt={logoData.name + "-logo"}
              />
            </a>
          )
        })
      }
    </div>
  )
};

export default Logos;