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
					title={"title"}
					txt={"abcd"}/>
			</div>
		)
	}


}
