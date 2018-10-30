import React, { Component } from 'react';

import './index.css';

export default class TextOnImageUponHover extends Component {
	render () {
		return (
			<div className="text-on-image-upon-hover">
				<img className={"text-on-image-upon-hover-img " + this.props.className}
					src={require(`assets/images/${this.props.src}`)} 
					alt={this.props.alt}/>
			</div>
		)
	}


}
