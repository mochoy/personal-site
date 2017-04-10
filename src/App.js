import React, { Component } from 'react';
import Intro from './components/Intro/index';
import Projects from './components/Projects/index';
import Footer from './components/Footer/index';
import Student from './components/Student/index';


let projects = [
	{
		"name": "NERF Ammo Counter",
		"link": "https://github.com/etnom/ming-batt/tree/master/nerf-ammo-counter",
		"description": "A kit for modified NERF blasters for counting darts.",
		"createdWith": "Made with Arduino, Adafruit's SPI and I2C OLED display libraries, and corresponding hardware."
	},
	{
		"name": "NERF Voltmeter",
		"link": "https://github.com/etnom/ming-batt/tree/master/Voltmeter",
		"description": "A kit for modified electronic NERF blasters which reads and calculates electric potential difference of blaster's battery.",
		"createdWith": "Made with Arduino, Adafruit's SPI and I2C OLED display libraries, and corresponding hardware."
	},
	{
		"name": "NERF Chrono Ammo Counter",
		"link": "https://github.com/etnom/ming-batt/tree/master/ChronoAmmoCounter",
		"description": "A kit for modified NERF blasters for counting darts which also tracks and calculates speed of dart.",
		"createdWith": "Made with Arduino, Adafruit's SPI and I2C OLED display libraries, and corresponding hardware."
	},
	{
		"name": "Vyper T-28",
		"link": "https://github.com/etnom/vyper_t-28",
		"description": "Smartest modified NERF blaster in existence. Counts ammo, calculates speed of dart, and checks battery voltage.",
		"createdWith": "Made with Arduino, Adafruit's SPI and I2C OLED display libraries, and corresponding hardware."
	},
	{
		"name": "Mingbatt.tech",
		"link": "https://github.com/etnom/muffin-table-pumpkin",
		"description": "Website for display and sale of modified NERF blasters and kits.",
		"createdWith": "Made with React, Express, and Node.js."
	},
	{
		"name": "Isaac Against the World",
		"link": "https://github.com/etnom/isaac-against-the-world",
		"description": "A 2-player bird's eye view zombie shooter web game, made with Phaser.",
		"createdWith": "Made with Phaser and JavaScript."
	},
	{
		"name": "King of Nepal Noodle",
		"link": "https://github.com/etnom/king-of-nepal-noodle",
		"description": "A real-time multiplayer Android tower defense game played in portrait orientation, made with Phaser and Firebase.",
		"createdWith": "Made with Firebase, Phaser and JavaScript."
	}, 
	{
		"name": "Awesome Game",
		"link": "https://github.com/MiLeung/AwesomeGame",
		"description": "A real-time multiplayer 2-d side-scroller shooter game.",
		"createdWith": "Made with Firebase, Phaser and JavaScript."
	}
]


class App extends Component {
  render() {
    return (
		<div className="App">
			<Intro/>
			<Stduent/>
			<Projects projectData={projects}/>
			<Footer/>

		</div>
    );
  }
}

export default App;
