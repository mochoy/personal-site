import React, { Component } from 'react';

import './index.css';

import TextOnImageUponHover from '../TextOnImageUponHover/index';
import LinkBtn from '../LinkBtn/index';


export default class ProjectBox extends Component {
	render () {
		let linkBtns = this.props.project.links.map(this.renderLinkBtns);

		return (
			<div className="project-box">
				<TextOnImageUponHover className={"project-box-img"}
					src={"projects/"+ this.props.project.img}
					title={this.props.project.title}/>
				<div className="project-text">
					<h2 className="project-title">{this.props.project.title}</h2>
					<p className="project-description">{this.props.project.description}</p>
					<div className="link-btn-project-container">
						{linkBtns}
					</div>
				</div>
			</div>
		)
	}

	renderLinkBtns(linkObj) {
		let className = "";
		if (linkObj.name === "Check It Out") {
			className = "link-btn-blue-project";
		} else if (linkObj.name === "Code") {
			className = "link-btn-green-project";
		}

		return (
			<LinkBtn
				className={className}
				textClassName={"link-btn-text-project"}
				link={linkObj.link}
				text={linkObj.name}
			/>
		)
	}


}
