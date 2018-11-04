import React, { Component } from 'react';

import './index.css';
import ProjectBox from '../ProjectBox/index'

export default class Tutorials extends Component {
	render () {
		console.log()
		let data = this.props.data[1].data;
		let tutorialBoxes = data.map(this.renderTutorialBoxes)

		return (
			<div
				className="section"
				id="Tutorials">
				<h1 className="center-text title">Tutorials</h1>
				{tutorialBoxes}
			</div>

		)
	}

	renderTutorialBoxes(item) {
		item.img = "tutorials/" + item.img
		return (
			<ProjectBox project={item}/>
		)
	}

}
