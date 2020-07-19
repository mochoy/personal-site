import React from 'react';

import './index.css';


const Home = props => {
  return (
    <section id="Home" 
      className="flex-container-vertically-center flex-container-horizontally-center"
    >
      <div id="bg-img"
        style={{
          backgroundImage: 'url(' + require('assets/images/background/bboy-icey-blurred.jpg') + ')'
        }}
      >
      </div>
      
      <div className="text-container text-center">
        <h1>Monty Choy</h1>
        <h2>Hardware Hacker</h2>
      </div>
      
    </section>
  )
}

export default Home;