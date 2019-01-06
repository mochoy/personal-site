import React, { Component } from 'react';

import './index.css';

import ContentBox from '../ContentBox/index'

import TextOnImageUponHover from '../TextOnImageUponHover/index';
import LinkBtn from '../LinkBtn/index';


export default class VerticalContentBox extends ContentBox {
	constructor(props) {
		super(props);

		// this.renderLinkBtns = this.renderLinkBtns.bind(this);
	}

	render () {
		let linkBtns = this.props.project.links.map(this.renderLinkBtns.bind(this));

		return (
			<div className={"vertical-content-box " + this.props.className}>
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

}
