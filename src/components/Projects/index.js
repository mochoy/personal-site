import React, { Component } from 'react';
import './index.css';

let projectData = [
  {
		"img": "arduinoChronograph.jpg"
	},
	{
		"img": "personalsite.png"
	},
	{
		"img": "awesomegame.png"
	},
	{
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
