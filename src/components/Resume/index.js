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
				<div className="subItems_SubContainer">
					<h4 className="subItem_Name">{arg.name}</h4>
					<p className="subItem_Description">{arg.description}</p>
				</div>
			)
		})
		
		return (
			<div className="subContainer">
				<h3 className="sectionDescription">{item.name}</h3>
				<div className="subItems_Container">{toRender}</div>
			</div>
		)
		
	}


}