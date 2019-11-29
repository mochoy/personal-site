import React, { Component } from 'react';

import './index.css';
import ContentBox from '../ContentBox/index'

export default class Publications extends Component {
	render () {
		let data = this.props.data[1].data;

		return (
			<div id="Publications" className="section">
				<div className="section-content">
					<h1 className="section-title">Publications</h1>
					<div id="publications-container">
						{data.map(this.renderPublicationBoxes)}
					</div>
				</div>
			</div>

		)
	}

	renderPublicationBoxes(item) {
		item.img = "tutorials/" + item.img
		return (
			<ContentBox project={item} 
				className="publication-box" 
				textContainerClassName="publication-box-text-container"
				imgClassName="publication-img"/>
		)
	}

}
