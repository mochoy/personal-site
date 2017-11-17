import React, { Component } from 'react';

import './App.css';

import Home from './components/Home/index';
import About from './components/About/index';
import TransitionImg from './components/TransitionImg/index';
import Portfolio from './components/Portfolio/index';
import ArtAndArchitecture from './components/ArtAndArchitecture/index';

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

const artAndArchitectureData = [
  {
    "name": "Serindipity",
    "by": "Jet, Monty, and Cherry",
    "imgs": [
      {
        "key": 0,
        "src": "Serendipity1.jpeg"
      },
      {
        "key": 1,
        "src": "Serendipity2.jpg"
      },
      {
        "key": 2,
        "src": "Serendipity3.jpg"
      },
      {
        "key": 3,
        "src": "Serendipity5.jpg"
      },
    ],
    "description1": "A Music Production Hub situated between Pier 1 and Pier 2 in Fort Mason's Historic Landmark District, residing close to the current home of the Fort Mason Center for Arts and Culture (FMCAC) which consolidates various outlets for people to explore their creative and artistic abilities. Serendipity to enhance the FMCAC's mission by creating additional space for musicians to both produce and perform their craft within a unique waterfront setting. Serendipity is a place for musically aspiring Bay Area artists to practice, hone, and challenge their capabilities in a wide-ranging environment equipped to cater to both collaborative interaction and individual experimentation. Serendipity will not only be a gathering place for those to express themselves through sound but will also be a place to learn and draw from musical history. Capitalizing on the site's public waterfront access, a public performace space is a key component of Serendipity.",
    "description2": "Third place winner of Best Group Design in the 48th annual Architectural Foundation of San Francisco High School Design Competition.",
    "description3": "This project includes a scale model made of butterboard and foam-core board as well as hand-drafted scale drawings of the interior sectional views, exterior elevation views, landscape view, and plan views of each floor according to architectural design standards."
  },
  {
    "name": "Calaveras County Cabin",
    "by": "Monty",
    "imgs": [
      {
        "key": 0,
        "src": "CalaverasCabin1.jpg"
      },
      {
        "key": 1,
        "src": "CalaverasCabin2.jpg"
      },
      {
        "key": 2,
        "src": "CalaverasCabin3.jpg"
      },
      {
        "key": 3,
        "src": "CalaverasCabin4.jpg"
      },
    ],
    "description1": "A small year-round vacation cabin used for fun and relaxation away from the hustle and bustle of the busy and congested metropolitan area. This cabin is a comfortable, well-designed retreat, with an approximate area of 1600 square-feet. This is a flexible and sustainable space, taking advantage of 'green' technology, energy savings, innovative and minimal materials, and attention to space and light. Intgration with the beautiful outdoors are also central to the design.",
    "description2": "This project includes a scale model made of butterboard and foam-core board as well as hand-drafted scale drawings of the interior sectional views, exterior elevation views, landscape view, and plan views of each floor according to architectural design standards."
  }
]

const tutorialsData = [
  {
    "title": "Tutorials",
    "backgroundColor": "white"
  },
  {
    "data": [
      {
          "key": 0,
          "img": "mosfetTutorial.png",
          "title": "MOSFETs for Nerf",
          "description": "An extensive technical write-up on everything there is to know about power MOSFETs for Nerf applications.",
          "link": "https://www.reddit.com/r/Nerf/comments/6ufmm8/the_complete_nerf_blaster_mosfet_wiring_tutorial/"
      },
      {
          "key": 1,
          "img": "nerf-ammo-counter-tutorial.jpg",
          "title": "Let's Robot powered Nerf Turret",
          "description": "Follow this tutorial to make an internet-controlled Nerf blaster turret with Let's Robot's robot controllers.",
          "code": "https://github.com/etnom/runmyrobot",
          "link": "https://letsrobot.readme.io/docs/awesome-nerf-turret"
      },
      {
        "key": 2,
        "img": "awesome-nerf-turret-tutorial.png",
          "title": "Nerf Ammo Counter",
          "description": "Make your own simple and cheap DIY ammo counter for Nerf blasters.",
          "code": "https://github.com/etnom/nerf-ammo-counter",
          "link": "https://www.reddit.com/r/Nerf/comments/5f9bjt/nerf_ammo_counter_the_ultimate_simple_cheap/"
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
        <ArtAndArchitecture data={artAndArchitectureData} />
        <TransitionImg link={transImgData[3]} />
        <Portfolio data={tutorialsData}/>

      </div>
    );
  }
}

export default App;
