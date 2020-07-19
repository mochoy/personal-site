import React from 'react';

import bboyIceyImg from '../../assets/images/background/bboy-icey.jpg';

import './index.css';


const Home = props => {
  return (
    <section id="Home">
      <img id="bg-img" src={bboyIceyImg} />

      <div id="text">
        Monty
      </div>
    </section>
  )
}

export default Home;