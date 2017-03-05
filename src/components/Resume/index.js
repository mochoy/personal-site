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
		var toRender = item.items.map(this.renderSubItems)
		return (
			<div id="resumeItem">{toRender}</div>
		)
		
	}

	renderSubItems(item){
		return (
			<p>hello</p>
		)
	}


}