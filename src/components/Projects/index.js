import React, { Component } from 'react';
import './index.css';

let projectData = [
  {
  	"key": 0,
  	"title": "Arduino Chronograph",
  	"description": "blah",
		"img": "arduinoChronograph.jpg"
	},
	{
  	"key": 1,		
  	"title": "Personal Website",
  	"description": "blah",
		"img": "personalsite.png"
	},
	{
		"key": 3,	
		"title": "Isaac Against the World",
		"description": "blah",
		"img": "iatw.png"
	}
]

export default class Projects extends Component {
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
			</div>
		)
	}


}
