import React from 'react';

import scrollToElement from 'scroll-to-element';

import './index.css';


const Home = props => {
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
            ["About", "Experience", "Projects", "Articles"]
              .map((section, key) => {
                return (
                  <p className="mouse-on-hover" 
                    onClick={e => scrollToElement(`#${section}`)}
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
  )
}

export default Home;