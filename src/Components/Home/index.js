import React from 'react';

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
          <p className="mouse-on-hover">About</p>
          <p className="mouse-on-hover">Projects</p>
          <p className="mouse-on-hover">Articles</p>
        </div>
      </div>

      {/* See more cursor to go to About section */}
      
    </section>
  )
}

export default Home;