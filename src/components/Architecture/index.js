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
				<div id="architectureItems-container">
					{artAndArchitectureItems}
				</div>
			</div>
		)
	}

	renderArtAndArchitectureItems (item) {
		let byText = function () {
			if (item.by) {
				return(
					<p><i>{item.by}</i></p>
				)
			} 
		}();

		return (
			<div className="architecture-item">
				<Carousel imgs={item.imgs} options={{smallImgs:true}}/>
				<div className="architecture-item-text-container">
					<h2 className="architecture-item-title">{item.name}</h2>
					{byText}
					<p>{item.description1}</p>
					<p>{item.description2}</p>
					<p>{item.description3}</p>
				</div>
			</div>
		)
	}
}
