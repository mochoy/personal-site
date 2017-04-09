import React, { Component } from 'react';
import './index.css';

var i = 0;

export default class Projects extends Component {
	render () {
		var projectItems = this.props.projectData.map(this.renderProjectItems)
		return (
			<div id="Projects">
				<h2 id="title">Projects</h2>
				<ul id="projects-container">{projectItems}</ul>
			</div>

		)
	}

	renderProjectItems(item){
		return (
			<li className="project">
				<h4 className="projectName">{item.name}</h4>
				<p className="nameAndLinkDivider"> | </p>
				<a className="link" href={item.link}>Code</a>
				<p className="projectDescription">{item.description}</p>

			</li>
		)
	}


}