import React, { Component } from 'react';

import './App.css';

import Home from './components/Home/index';
import About from './components/About/index';
import TransitionImg from './components/TransitionImg/index';
import Portfolio from './components/Portfolio/index';

const transImgData = [
  "Buildings.jpg",
  "Bridge.jpg",
  "GreatAmerica.jpg",
  "DiagonalThing.jpg",
  "Cookie.jpg",
  "Lighthouse.jpg",
  "Portland.jpg",
  "Beach.jpg"
];

const projectData = [
  {
    "title": "Projects",
    "backgroundColor": "white"
  },
  {
    "data": [
      {
          "key": 0,
          "img": "smartBlaster.jpg",
          "title": "Smart Blaster",
          "description": "A hardware and software platform consisting of stackable PCB modules and a library compatible with Teensy and Arduino microcontrollers enabling ammo counting and more for modified Nerf blasters.",
          "code": "https://github.com/etnom/smart-blaster"
      },
      {
          "key": 1,
          "img": "arduinoChronograph.jpg",
          "title": "Chronograph",
          "description": "Arduino-powered blastics chronograph able to track and calculate muzzle velocity of Nerf blasters, airsoft guns, paintball guns, and more. Built with an Arduino Nano, side-looking IR emitters and receivers, I2C monochrome OLED display, PVC, and a cardboard box.",
          "code": "https://github.com/etnom/arduino-chronograph"
      },
      {
        "key": 2,
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
];

const blasterData = [
  {
    "title": "Blasters",
    "backgroundColor": "#ffc04c"
  },
  {
    "data": [
      {
          "key": 0,
          "img": "Awesome-Nerf-Turret.png",
          "title": "Awesome-Nerf-Turret",
          "description": "A Nerf turret based around the Nerf Hyperfire, controlled and streaming live footage online through Let's Robot's controller scripts. Powered by a Raspberry Pi interfacing with the modified blasters through an electromechanical relay.",
          "code": "https://github.com/etnom/runmyrobot"
      },
      {
          "key": 1,
          "img": "VyperT28.jpg",
          "title": "Vyper T-28",
          "description": "A perfected integration between three blasters, the Nerf Demolisher, the Nerf Joltz and the Nerf Rayven, with an added Smart Blaster kit containing an ammo counter, voltmeter, and chronograph. Modifications include the integration, 3D printed parts, full rewire to 16 AWG mutlistranded silicon-insulated wiring, MOSFET motor interfacing, lock removal, lubrication of all moving parts, and running off a 2S LiPo.",
          "code": "https://github.com/etnom/vyper_t-28"
      },
      {
        "key": 2,
        "img": "SmartStrayven.jpg",
          "title": "Smart Strayven",
          "description": "A seemless integration between two blasters, the Nerf Styfe and the Nerf Rayven, with an added Smart Blaster kit containing anammo counter, voltmeter, and chronograph. Modifications include the integration, 3D printed parts, full rewire to 16 AWG mutlistranded silicon-insulated wiring, MOSFET motor interfacing, lock removal, lubrication of all moving parts, and running off a 2S LiPo.",
          "code": "https://github.com/etnom/smart-strayven"
      },
      {
        "key": 3,
        "img": "nerfAmmoCounter.jpg",
        "title": "Nerf Ammo Counter",
        "description": "Arduino-powered ammo counter built for the Nerf Stryfe including auto-reload detection and magazine size toggling. Blaster modifications include full require, lock removal, lubrication of all moving parts, and running off two IMR batteries.",
        "code": "https://github.com/etnom/nerf-ammo-counter"
      }
    ]
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <About/>
        <TransitionImg link={transImgData[0]} />
        <Portfolio data={projectData}/>
        <TransitionImg link={transImgData[1]} />
        <Portfolio data={blasterData}/>
        <TransitionImg link={transImgData[2]} />


      </div>
    );
  }
}

export default App;
