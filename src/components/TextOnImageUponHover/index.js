import React, { Component } from 'react';

import './index.css';

export default class TextOnImageUponHover extends Component {
	render () {
		return (
			<div className={"overlay " + this.props.className}
				style={{backgroundImage:  'url(' + require(`assets/images/${this.props.src}`) + ')'}}>
				
				<h3 className={"overlay-title " + this.props.titleClassName}>{this.props.title}</h3>
				<p className={"overlay-description " + this.props.txtClassName}>{this.props.txt}</p>
			</div>
		)
	}


}
