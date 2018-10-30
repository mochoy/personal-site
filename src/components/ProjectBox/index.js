import React, { Component } from 'react';

import './index.css';

import TextOnImageUponHover from '../TextOnImageUponHover/index';

export default class ProjectBox extends Component {
	render () {
		console.log(this.props.project);

		return (
			<div className="project-box">
				<TextOnImageUponHover 
					src={"projects/"+ this.props.project.img}
					alt={this.props.project.name}/>
			</div>
		)
	}


}
