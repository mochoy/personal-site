import React, { Component } from 'react';
import './index.css';

import Carousel from "../Carousel/index";

export default class ArtAndArchitecture extends Component {
	render () {
		let data = this.props.data;
		let artAndArchitectureItems = data.map(this.renderArtAndArchitectureItems);
		return (
			<div id="ArtAndArchitecture" className='section'>
				<h3 className="title">Architecture</h3>
				<div id="artAndArchitectureItems-container">
					{artAndArchitectureItems}
				</div>
			</div>
		)
	}

	renderArtAndArchitectureItems (item) {
		return (
			<div className="artAndArchitecture-item">

			</div>
		)
	}
}
