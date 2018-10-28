import React, { Component } from 'react';

import './index.css';

import Home from '../Home/index';
import About from '../About/index';
import TransitionImg from '../TransitionImg/index';
import Portfolio from '../Portfolio/index';
import ArtAndArchitecture from '../ArtAndArchitecture/index';


const tutorialsData = [
  {
    "title": "Tutorials",
    "backgroundColor": "white",
    "id": "Tutorials"
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
          "img": "awesome-nerf-turret-tutorial.png",
          "title": "Let's Robot powered Nerf Turret",
          "description": "Follow this tutorial to make an internet-controlled Nerf blaster turret with Let's Robot's robot controllers.",
          "code": "https://github.com/etnom/runmyrobot",
          "link": "https://letsrobot.readme.io/docs/awesome-nerf-turret"
      },
      {
        "key": 2,
        "img": "nerf-ammo-counter-tutorial.jpg",
          "title": "Nerf Ammo Counter",
          "description": "Make your own simple and cheap DIY ammo counter for Nerf blasters.",
          "code": "https://github.com/etnom/nerf-ammo-counter",
          "link": "https://www.reddit.com/r/Nerf/comments/5f9bjt/nerf_ammo_counter_the_ultimate_simple_cheap/"
      }
    ]
  }
];

export default class App extends Component {
  constructor (props) {
    super(props);

    this.data = require('assets/data/data.js').data;
  }

  render() {
    return (
      <div className="App">
        <Home data={this.data.homeData}/>
        

      </div>
    );
  }
}

