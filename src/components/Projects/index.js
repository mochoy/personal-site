import React, { Component } from 'react';
import './index.css';

let projectData = [
  {
  	"key": 0,
  	"title": "Arduino Chronograph",
		"img": "arduinoChronograph.jpg"
	},
	{
  	"key": 1,		
  	"title": "Personal Website",
		"img": "personalsite.png"
	},
	{
		"key": 2,	
		"title": "Awesome Game",
		"img": "awesomegame.png"
	},
	{
		"key": 3,	
		"title": "Isaac Against the World",
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
			<div className="project flex-item">
				<img
					className="project-img"
          src={require(`assets/${item.img}`)}

				/>

			</div>
		)
	}


}
