import React, { Component } from 'react';

import './index.css';

export default class TextOnImageUponHover extends Component {
	render () {
		console.log(this.props.project);

		return (
			<div className="project-box">
				<img src={require(`assets/images/${this.props.src}`)} alt={this.props.alt}/>
			</div>
		)
	}


}
