import React, { useContext } from 'react';
import scrollToElement from 'scroll-to-element';

import { ReactGACtx } from '../App';


import './index.css';


const Home = props => {
  const ReactGA = useContext(ReactGACtx);

  return (
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
        onClick={e => {
          scrollToElement("#About");

          ReactGA.event({
            category: 'Home Chevron',
            action: 'Clicked'
          });
        }}
      />

    </section>
    
  )
}

export default Home;