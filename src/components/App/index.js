import React, { Component } from 'react';

import './index.css';

import Home from '../Home/index';
import About from '../About/index';
import TransitionImg from '../TransitionImg/index';
import Portfolio from '../Portfolio/index';
import ArtAndArchitecture from '../ArtAndArchitecture/index';

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

