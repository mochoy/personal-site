import React from 'react';

import './index.css';


const Home = props => {
  return (
    <section id="Home">
      <div id="bg-img"
        style={{
          backgroundImage: 'url(' + require('assets/images/background/bboy-icey.jpg') + ')'
        }}
      >
      </div>
    </section>
  )
}

export default Home;