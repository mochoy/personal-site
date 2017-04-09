import React, { Component } from 'react';
import Intro from './components/Intro/index';
import Projects from './components/Projects/index';

let projects = [
	{
		"name": "NERF Ammo Counter",
		"link": "https://github.com/etnom/ming-batt/tree/master/nerf-ammo-counter",
		"description": "A kit for modified NERF blasters for counting darts"
	},
	{
		"name": "NERF Chrono Ammo Counter",
		"link": "https://github.com/etnom/ming-batt/tree/master/ChronoAmmoCounter",
		"description": "A kit for modified NERF blasters for counting darts which also tracks and calcualtes speed of dart"
	},
	{
		"name": "Isaac Against the World",
		"link": "https://github.com/etnom/isaac-against-the-world",
		"description": "A 2-player bird's eye view zombie shooter web game, made with Phaser"
	},
	{
		"name": "King of Nepal Noodle",
		"link": "https://github.com/etnom/king-of-nepal-noodle",
		"description": "A real-time multiplayer Android tower defense game played in portrait orientation, made with Phaser and Firebase"
	}, 
	{
		"name": "Awesome Game",
		"link": "https://github.com/MiLeung/AwesomeGame",
		"description": "A real-time multiplayer 2-d side-scroller shooter game"
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
