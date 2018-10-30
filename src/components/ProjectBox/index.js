import React, { Component } from 'react';

import './index.css';

export default class ProjectBox extends Component {
	render () {
		console.log(this.props.project);

		return (
			<div className="project-box">
				<img src={require(`assets/images/projects/${this.props.project.img}`)} alt={this.props.project.name}/>
			</div>
		)
	}


}
