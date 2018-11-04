import React, { Component } from 'react';
import './index.css';

import Carousel from "../Carousel/index";

export default class Architecture extends Component {
	render () {
		let _data = this.props.data;
		let artAndArchitectureItems = _data.map(this.renderArtAndArchitectureItems);

		return (
			<div id="Architecture" className='section'>
				<h3 className="architecture-title">Architecture</h3>
				<div id="artAndArchitectureItems-container">
					{artAndArchitectureItems}
				</div>
			</div>
		)
	}

	renderArtAndArchitectureItems (item) {
		return (
			<div className="architecture-item flex-container">
				<Carousel imgs={item.imgs} options={{smallImgs:true}}/>
				<h2 className="architecture-item-title">{item.name}</h2>
				<p>{item.description1}</p>
				<p>{item.description2}</p>
				<p>{item.description3}</p>
			</div>
		)
	}
}
