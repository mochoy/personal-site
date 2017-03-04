import React, { Component } from 'react';
import './index.css';

export default class Intro extends Component {
	render () {
		var projectItems = this.props.projectData.map(this.renderProjectItems)
		return (
			<div id="projects">{projectItems}</div>

		)
	}

	renderProjectItems(item){
		return (
			<div id="project">
				<h2>{item.name}</h2>
				<p>{item.description}</p>
				<a href={item.link}>Code</a>
			</div>
		)
	}


}