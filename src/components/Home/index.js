import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';
import './index.css';

export default class Home extends Component {
	constructor(props) {
    super(props);

	}

	render () {
		return (
			<div id="Intro"
				style={{backgroundImage: 'url(' + require('assets/hawaii-resort.jpg') + ')'}}>
				<div id="header">
					<span 
						className="header-text-border"
						id="header-title">Monty Choy</span>
					<br></br>
					<span 
						className="header-text-border header-description">Hardware Hacker</span>
					<br></br>
					<span 
						className="header-text-border header-description">San Francisco, CA</span>
				</div>
			</div>
		)
	}


}
