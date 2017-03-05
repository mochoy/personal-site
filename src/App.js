import React, { Component } from 'react';
import Intro from './components/Intro/index';
import Projects from './components/Projects/index';
import Resume from './components/Resume/index';

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

let resume = [
	{
		"name": "Education",
		"items": [
			{
				"name": "Abraham Lincoln High School",
				"description": "class of 2018 - Current Junior, 4.3 GPA"
			},
			{
				"name": "City College of San Francisco",
				"description": "High School Student Dual Enrollment Program, 4.0 GPA"
			},
			{
				"name": "Mission Bit",
				"description": "Technical curriculum focused on computer science in the San Francisco Bay Area"
			},
			{
				"name": "ACE (Architecture, Construction, and Engineering) Pathway",
				"description": "A selective, on-campus, accelerated track focusing on Architecture, Construction, and Engineering."
			}
		]
	},
	{
		"name": "Experience and Extracurriculars",
		"items": [
			{
				"name": "Sunset Media Wave",
				"description": "8-week cycle of blogging with WordPress about development process of a mobile game"
			},
			{
				"name": "SNBC Beacon Volunteer",
				"description": "Volunteer to teach middle-school students and instructors with breakdancing"
			},
			{
				"name": "Coding Club",
				"description": "President and founder with assistance from Hack Club, commissioned by school to develop web app ‘FaceFlip’"
			},
			{
				"name": "Robotics Club",
				"description": "Upcoming president"
			}, 
			{
				"name": "Science and Math",
				"description": "Participation in annual National Science Bowl regional at SLACS's particle accelerator facility"
			},
			{
				"name": "Breakdancing/B-Boy",
				"description": "Since 6th grade, Participate in competitions, perform for multiple schools"
			},
			{
				"name": "Varsity Wrestling",
				"description": "4th in the City"
			},
			{
				"name": "Varist Tennis",
				"description": "Since 10th grade"
			}
		]
		

	}
]

class App extends Component {
  render() {
    return (
		<div className="App">
			<Intro/>
			<Projects projectData={projects}/>
			<Resume resumeData={resume}/>
		</div>
    );
  }
}

export default App;
