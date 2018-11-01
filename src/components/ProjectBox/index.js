import React, { Component } from 'react';

import './index.css';

import TextOnImageUponHover from '../TextOnImageUponHover/index';

export default class ProjectBox extends Component {
	render () {
		console.log(this.props.project);

		return (
			<div className="project-box">
				<TextOnImageUponHover className={"project-box-img"}
					src={"projects/"+ this.props.project.img}
					alt={this.props.project.name}
					title={this.props.project.title}
					txt={"abcd"}/>
				<div className="project-text">
					<h2 className="project-title">{this.props.project.title}</h2>
					<p className="project-description">{this.props.project.description}</p>
				</div>
			</div>
		)
	}


}
