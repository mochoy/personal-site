import React, { useContext } from 'react';
import scrollToElement from 'scroll-to-element';
import VisibilitySensor from 'react-visibility-sensor';

import Nav from '../Nav';
import { ReactGACtx } from '../App';


import './index.css';


const Home = props => {
  const ReactGA = useContext(ReactGACtx);

  const [ isHomeVisible, setIsHomeVisible ] = React.useState(true);

  return (
    <div style={{ height: "100%" }}>
    { /*  This above div is needed to display the nav in this component, there
          are performance issues with setting the state if I want to display nav 
          from App 
    */ }

      <VisibilitySensor 
        partialVisibility={true} 
        onChange={ isVisible => setIsHomeVisible(isVisible)}
      >
        <section id="Home" 
          className="flex-container-vertically-center flex-container-horizontally-center"
        >
          {/* Background image */}
          <div id="bg-img"
            style={{
              backgroundImage: 'url(' + require('assets/images/background/bboy-icey-blurred.jpg') + ')'
            }}
          >
          </div>
          
          <div className="text-container text-center">
            {/* Big intro text */}
            <h1>Monty Choy</h1>
            <h2>Hardware Hacker</h2>

            {/* Links to different sections */}
            <div className="links-container flex-container-horizontally-center">
              {
                ["About", "Experience", "Projects"]
                  .map((section, key) => {
                    return (
                      <p className="mouse-on-hover" 
                        onClick={e => {
                          ReactGA.event({
                            category: 'Home Links',
                            action: 'Clicked',
                            label: section,
                          });

                          scrollToElement(`#${section}`)
                        }}
                        key={key}
                      >
                        {section}
                      </p>
                    )
                  })
              }
            </div>
          </div>
          
          {/* See more cursor to go to About section */}
          <i className="chevron down mouse-on-hover" 
            onClick={e => scrollToElement("#About")}
          />

        </section>
      </VisibilitySensor>

      { !isHomeVisible && 
        <Nav/>
      }
    </div>
    
  )
}

export default Home;