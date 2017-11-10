import React, { Component } from 'react';
import './index.css';

let projectData = [
  {
  		"key": 0,
  		"img": "arduinoChronograph.jpg",
  		"title": "Chronograph",
  		"description": "Arduino-powered blastics chronograph able to track and calculate muzzle velocity of Nerf blasters, airsoft, paintball guns, and more.",
  		"code": "https://github.com/etnom/arduino-chronograph"
	},
	{
 	 	"key": 1,		
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

export default class Portfolio extends Component {
	render () {
		var projectItems = projectData.map(this.renderProjectItems)
		return (
			<div id="Projects" className='section'>
				<h3 className="title">Projects</h3>
				<div id="projects-container" className="flex-container-center">
					{projectItems}
				</div>
			</div>

		)
	}

	renderProjectItems(item){
		return (
			<div 
				className="project flex-item project-overlay"
				style={{backgroundImage: 'url(' + require(`assets/${item.img}`) + ')'}}
				>
				<h3 className="project-title">{item.title}</h3>
				<p className="project-description">{item.description}</p>
				<a className="project-code" href={item.code}>Code</a>
			</div>
		)
	}


}
