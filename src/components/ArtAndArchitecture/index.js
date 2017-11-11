import React, { Component } from 'react';
import './index.css';

import Carousel from "../Carousel/index";

export default class ArtAndArchitecture extends Component {
	render () {
		let _data = this.props.data;
		let artAndArchitectureItems = _data.map(this.renderArtAndArchitectureItems);
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
			<div className="artAndArchitecture-item flex-container">
				<Carousel data={item}/>
				<h2>{item.name}</h2>
				<p>{item.description1}</p>
				<p>{item.description2}</p>
				<p>{item.description3}</p>
			</div>
		)
	}
}
