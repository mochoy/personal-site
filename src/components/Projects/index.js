import React, { Component } from 'react';
import './index.css';

export default class Projects extends Component {
	render () {
		var projectItems = this.props.projectData.map(this.renderProjectItems)
		return (
			<div id="Projects">
				<h2 id="title">Projects</h2>
				<div id="projects-container">{projectItems}</div>
			</div>

		)
	}

	renderProjectItems(item){
		return (
			<div className="project">
				<span>
					<h4 className="projectName">{item.name}</h4>
					<p className="nameAndLinkDivider"> | </p>
					<a className="link" href={item.link}>Code</a>

				</span>
				<p className="projectDescription">{item.description}</p>
			</div>
		)
	}


}