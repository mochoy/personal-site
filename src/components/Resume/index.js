import React, { Component } from 'react';
import './index.css';

export default class Resume extends Component {
	render () {
		var resumeItems = this.props.resumeData.map(this.renderItems)
		return (
			<div id="Resume">
				<h2 id="title">Resume</h2>
				<div id="resume">{resumeItems}</div>
			</div>

		)
	}

	renderItems(item){
		var toRender = item.items.map(function (arg) {
			return (
				<div>
					<h4>{arg.name}</h4>
					<p>{arg.description}</p>
				</div>
			)
		})
		
		return (
			<div>
				<h3 id="sectionDescription">{item.name}</h3>
				<div id="resumeItem">{toRender}</div>
			</div>
		)
		
	}


}