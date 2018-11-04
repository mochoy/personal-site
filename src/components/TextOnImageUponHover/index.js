import React, { Component } from 'react';

import './index.css';

export default class TextOnImageUponHover extends Component {
	render () {
		let titleProps = this.props.title;
		if (typeof titleProps !== 'undefined') {
			let titleClassName = this.props.titleClassName;
			var title = function () {
				return (
					<h3 className={"overlay-title " + titleClassName}>{titleProps}</h3>
				) 
			}();
		}

		return (
			<div className={"overlay bg-img " + this.props.className}
				style={{backgroundImage:  'url(' + require(`assets/images/${this.props.src}`) + ')'}}>

				{title}
				<p className={"overlay-description " + this.props.txtClassName}>{this.props.txt}</p>
			</div>
		)
	}


}
