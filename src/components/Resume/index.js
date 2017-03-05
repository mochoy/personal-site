import React, { Component } from 'react';
import './index.css';

export default class Resume extends Component {
	render () {
		var resumeItems = this.props.resumeData.map(this.renderItems)
		return (
			<div id="Resume">
				<h2 id="title">Resume</h2>
				<div id="resumeItemsContainer">{resumeItems}</div>
			</div>

		)
	}

	renderItems(item){
		var toRender = item.items.map(function (arg) {
			return (
				<div id="subItems_SubContainer">
					<h4 id="subItem_Name">{arg.name}</h4>
					<p id="subItem_Description">{arg.description}</p>
				</div>
			)
		})
		
		return (
			<div id="subContainer">
				<h3 id="sectionDescription">{item.name}</h3>
				<div id="subItems_Container">{toRender}</div>
			</div>
		)
		
	}


}