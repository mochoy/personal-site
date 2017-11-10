import React, { Component } from 'react';

import './App.css';

import Home from './components/Home/index';
import About from './components/About/index';
import TransitionImg from './components/TransitionImg/index';
import Portfolio from './components/Portfolio/index';

const projectData = [
  {
    "backgroundColor": "white"
  },
  {
    "data": [
      {
          "key": 0,
          "img": "arduinoChronograph.jpg",
          "title": "Chronograph",
          "description": "Arduino-powered blastics chronograph able to track and calculate muzzle velocity of Nerf blasters, airsoft guns, paintball guns, and more. Built with an Arduino Nano, side-looking IR emitters and receivers, I2C monochrome OLED display, PVC, and a cardboard box.",
          "code": "https://github.com/etnom/arduino-chronograph"
      },
      {
        "key": 1,   
        "img": "personalsite.png",
          "title": "Personal Website",
          "description": "What you're on right now! Website to display who I am and what I have done. Made with React.",
          "code": "https://github.com/etnom/personal-site"
      },
      {
        "key": 3, 
        "img": "iatw.png",
        "title": "Isaac Against the World",
        "description": "A two-player bird's-eye-view shooter web game with guns, explosions, and zombies. Inspired by Boxhead. Made with Phaser and Annie.",
        "code": "https://github.com/etnom/isaac-against-the-world"
      }
    ]
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <About/>
        <TransitionImg imgKey="0" />
        <Portfolio data={projectData}/>
      </div>
    );
  }
}

export default App;
