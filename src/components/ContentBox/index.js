import React, { Component } from 'react';

import './index.css';

import TextOnImageUponHover from '../TextOnImageUponHover/index';
import LinkBtn from '../LinkBtn/index';


export default class ContentBox extends Component {
	render () {
		let linkBtns = this.props.project.links.map(this.renderLinkBtns);

		return (
			<div className={"content-box " + this.props.className}>
				<TextOnImageUponHover className={this.props.imgClassName}
					src={this.props.project.img}
					title={this.props.project.title}/>
				<div className={this.props.textContainerClassName}>
					<h2 className="content-title">{this.props.project.title}</h2>
					<p className="content-by"><i>{this.props.project.by}</i></p>
					<p className="content-description">{this.props.project.description}</p>
					<p><i>{this.props.project.event}</i></p>
					<div className="link-btn-content-container">
						{linkBtns}
					</div>
				</div>
			</div>
		)
	}

	renderLinkBtns(linkObj) {
		if (linkObj.name && linkObj.link) {
			let className = "";
			if (linkObj.name === "Check It Out") {
				className = "link-btn-blue-content";
			} else if (linkObj.name === "Code") {
				className = "link-btn-green-content";
			} else if (linkObj.name === "Schematics") {
				className = "link-btn-orange-content";
			}

			return (
				<LinkBtn
					className={"round-btn " + className}
					textClassName={"link-btn-text-content"}
					link={linkObj.link}
					text={linkObj.name}
				/>
			)
		}
		
	}


}
