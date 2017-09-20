import React, { Component } from 'react';
import Intro from './components/Intro/index';
import Portfolio from './components/Portfolio/index';
import Footer from './components/Footer/index';
import Student from './components/Student/index';
import Art from './components/Art/index';


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
		"description": "A 2-player bird's eye view zombie shooter web game, made with Phaser."
	}, 
	{
		"name": "Awesome Game",
		"link": "https://github.com/MiLeung/AwesomeGame",
		"description": "A real-time multiplayer 2-d side-scroller shooter game."
	}
];

let art = [

];


class App extends Component {
  render() {
    return (
		<div className="App">
			<Intro/>
			<Portfolio projectData={projects}/>
			<Art projectData={art}/>
			<Footer/>

		</div>
    );
  }
}

export default App;
