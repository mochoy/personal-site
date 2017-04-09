import React, { Component } from 'react';
import Intro from './components/Intro/index';
import Projects from './components/Projects/index';

let projects = [
	{
		"name": "NERF Ammo Counter",
		"link": "https://github.com/etnom/ming-batt/tree/master/nerf-ammo-counter",
		"description": "A kit for modified NERF blasters for counting darts",
		"createdWith": "Made with Arduino and Adafruit's SPI and I2C OLED display libraries"
	},
	{
		"name": "NERF Voltmeter",
		"link": "https://github.com/etnom/ming-batt/tree/master/Voltmeter",
		"description": "A kit for modified electronic NERF blasters which reads and calculates electric potential difference of blaster's battery",
		"createdWith": "Made with Arduino and Adafruit's SPI and I2C OLED display libraries"
	},
	{
		"name": "NERF Chrono Ammo Counter",
		"link": "https://github.com/etnom/ming-batt/tree/master/ChronoAmmoCounter",
		"description": "A kit for modified NERF blasters for counting darts which also tracks and calcualtes speed of dart",
		"createdWith": "Made with Arduino and Adafruit's SPI and I2C OLED display libraries"
	},
	{
		"name": "Isaac Against the World",
		"link": "https://github.com/etnom/isaac-against-the-world",
		"description": "A 2-player bird's eye view zombie shooter web game, made with Phaser",
		"createdWith": "Made with Phaser and JavaScript"
	},
	{
		"name": "King of Nepal Noodle",
		"link": "https://github.com/etnom/king-of-nepal-noodle",
		"description": "A real-time multiplayer Android tower defense game played in portrait orientation, made with Phaser and Firebase",
		"createdWith": "Made with Firebase, Phaser and JavaScript"
	}, 
	{
		"name": "Awesome Game",
		"link": "https://github.com/MiLeung/AwesomeGame",
		"description": "A real-time multiplayer 2-d side-scroller shooter game",
		"createdWith": "Made with Firebase, Phaser and JavaScript"
	}
]


class App extends Component {
  render() {
    return (
		<div className="App">
			<Intro/>
			<Projects projectData={projects}/>

			<div id="footer"></div>
		</div>
    );
  }
}

export default App;
