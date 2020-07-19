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
      
      <div className="txt-container">
        <h1>fsdf</h1>
      </div>
      
    </section>
  )
}

export default Home;