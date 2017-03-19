import React, { Component } from 'react';
import './index.css';

export default class ExperienceAndExtracurriculars extends Component {
	render () {
		var resumeItems = this.props.data.map(this.renderItems)
		return (
			<div id="Resume">
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