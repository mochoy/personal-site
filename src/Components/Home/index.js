import React, { useContext } from 'react';
import scrollToElement from 'scroll-to-element';

import { ReactGACtx } from '../App';
import { scrollToOffset } from '../../consts';
import useWindowSize from '../../hooks/useWindowSize';


import './index.css';


const Home = props => {
  const ReactGA = useContext(ReactGACtx);

  const { height } = useWindowSize();

  
  return (
    <section id="Home" 
      className="flex-container-vertically-center flex-container-horizontally-center"
      style={{ height: height + "px" }}
      onClick={e => {
        ReactGA.event({
          category: 'Home',
          action: 'Clicked',
          label: "If didn't click chevron or links, probably missed chevrom lmao"
        });
      }}
    >
      {/* Background image */}
      <div className="bg-img"
        style={{
          backgroundImage: 'url(' + require('assets/images/background/bboy-icey-blurred.jpg') + ')'
        }}
      >
      </div>
      
      <div className="text-container text-center">
        {/* Big intro text */}
        <h1>Monty Choy</h1>
        <h2>Hardware Hacker</h2>

      </div>
      
      {/* See more cursor to go to About section */}
      <i className="chevron down mouse-on-hover" 
        onClick={e => {
          scrollToElement("#About", { offset: scrollToOffset });

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