import React, { Component } from 'react';

import './index.css';

export default class TextOnImageUponHover extends Component {
	render () {
		return (
			<div className={"text-on-image-upon-hover " + this.props.className}
				style={{backgroundImage:  'url(' + require(`assets/images/${this.props.src}`) + ')'}}>
				<h3 className={"overlay-title " + this.props.titleClassName}>{this.props.title}</h3>
				<p className={"overlay-text " + this.props.txtClassName}>{this.props.txt}</p>
			</div>
		)
	}


}
