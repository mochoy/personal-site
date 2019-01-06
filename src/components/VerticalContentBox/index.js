import React, { Component } from 'react';

import './index.css';

import TextOnImageUponHover from '../TextOnImageUponHover/index';
import LinkBtn from '../LinkBtn/index';


export default class VerticalContentBox extends Component {
	constructor(props) {
		super(props);

		// this.renderLinkBtns = this.renderLinkBtns.bind(this);
	}

	render () {
		let linkBtns = this.props.project.links.map(this.renderLinkBtns.bind(this));

		return (
			<div className={"content-box " + this.props.className}>
				<TextOnImageUponHover className={"content-img " + this.props.imgClassName}
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
			let className = this.findClassnameForBtns(linkObj.name);

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

	findClassnameForBtns(name) {
		if (name === "Check It Out") {
			return "link-btn-blue-content";
		} else if (name === "Code") {
			return "link-btn-green-content";
		} else if (name === "Schematics") {
			return "link-btn-orange-content";
		}
	}


}
