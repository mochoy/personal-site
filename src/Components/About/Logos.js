import React, { useContext } from 'react';

import { ReactGACtx } from '../App';

const Logos = props => {
  const { logosData } = props;

  const ReactGA = useContext(ReactGACtx);

  return (
    <div id="Logos" className="flex-container-vertical">
      {
        logosData.map((logoData, key) => {
          const { link, name, imgSrc } = logoData;

          return (
            <a href={link} 
              className="logo cursor-on-hover"
              target="_blank" 
              rel="noopener noreferrer"
              key={key}
              onClick={() => {
                // Send to analytics
                ReactGA.event({
                  category: 'Logo Link',
                  action: "Clicked",
                  label: name
                });
              }}
            >
              <img 
                className="grow-on-hover" 
                src={require(`assets/images/logos/${imgSrc}`)} 
                alt={name + "-logo"}
              />
            </a>
          )
        })
      }
    </div>
  )
};

export default Logos;