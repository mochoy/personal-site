import React, { Component } from 'react';

import Intro from './components/Intro/index';
import About from './components/About/index';
import TransitionImg from './components/TransitionImg/index'

let projects = [
	{
		"name": "Smart Blaster",
		"link": "https://github.com/etnom/smart-blaster",
		"description": "An Arduino-powered modular hardware platform enabling a plethora of otherwise impossible features into NERF blasters."
	},
	{
		"name": "NERF Select Fire",
		"link": "https://github.com/etnom/nerf-select-fire",
		"description": "An Arduino-powered hardware module enabling fire-control in fully-automatic NERF blasters absent of this feature."
	},
	{
		"name": "Arduino Chronograph",
		"link": "https://github.com/etnom/arduino-chronograph",
		"description": "An Arduino-powered chronograph to record velocity of NERF blastes and paintball guns."
	},
	{
		"name": "NERF Time",
		"link": "https://github.com/MiLeung/NerfTime",
		"description": "An Arduino powered fully-automatic, modifed NERF blaster remote controlled real-time through a web and mobile application."
	},
	{
		"name": "awesome-nerf-turret",
		"link": "https://github.com/etnom/runmyrobot",
		"description": "A fully-automatic internet-controlled NERF blaster turret in real-time through Let's Robot."
	},
	{
		"name": "NERF Ammo Counter",
		"link": "https://github.com/etnom/ming-batt/tree/master/nerf-ammo-counter",
		"description": "A internal ammo counter for NERF blasters. "
	},
	{
		"name": "Vyper T-28",
		"link": "https://github.com/etnom/vyper_t-28",
		"description": "Smartest modified NERF blaster in existence. Counts ammo, calculates speed of dart, and checks battery voltage."
	},
	{
		"name": "Isaac Against the World",
		"link": "https://github.com/etnom/isaac-against-the-world",
		"description": "A 2-player bird's eye view zombie shooter web game, made with Phaser and Annie Chen. Second place winner of the Congressional App Challenge."
	},
	{
		"name": "Awesome Game",
		"link": "https://github.com/MiLeung/AwesomeGame",
		"description": "A real-time multiplayer 2-d side-scroller shooter game."
	}
];

let art = [
	{
		"name": "Serendipity",
		"by": "Jet Hui, Monty Choy and Cherry Tsang",
		"description": "A large art center emphasizing on music and dance. Third place winner of group design in 2016 Architecture Foundation Design Competition."
	},
	{
		"name": "Calaveras County Cabin",
		"by": "Monty Choy",
		"description": "A retreat cabin located in Calaveras County."
	}
];


class App extends Component {
  render() {
    return (
		<div className="App">
			<Intro/>
			<About/>
			<TransitionImg imgKey="0" />
		</div>
    );
  }
}

export default App;
