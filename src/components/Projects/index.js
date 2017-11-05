import React, { Component } from 'react';
import './index.css';

export default class Projects extends Component {
	render () {
		// var projectItems = this.props.projectData.map(this.renderProjectItems)
		return (
			<div id="Projects">
				<h2 id="title">Projects</h2>
			</div>

		)
	}

	renderProjectItems(item){
		return (
			<li className="project">
				<div className="project-container">
					<div className="projectTitle">
						<h4 className="projectName">{item.name}</h4>
						<p className="nameAndLinkDivider"> | </p>
						<a className="link" href={item.link}>Code</a>
					</div>
					<div className="projectDescriptionContainer">
						<p className="projectDescription">{item.description}</p>
						<p className="projectCreatedWith">{item.createdWith}</p>
					</div>
				</div>
			</li>
		)
	}


}
