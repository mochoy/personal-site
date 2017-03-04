import React, { Component } from 'react';
import './index.css';

export default class Intro extends Component {
	render () {
		var projectItems = this.props.projectData.map(this.renderProjectItems)
		return (
			<div id="Projects">
				<h2 id="title">Projects</h2>
				<div id="projects">{projectItems}</div>
			</div>

		)
	}

	renderProjectItems(item){
		return (
			<div className="project">
				<h4 className="projectName">{item.name}</h4>
				<p className="projectDescription">{item.description}</p>
				<a href={item.link}>Code</a>
			</div>
		)
	}


}