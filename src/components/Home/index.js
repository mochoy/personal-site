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
				style={{backgroundImage: 'url(' + require('assets/images/background/hawaii-beach.jpg') + ')'}}>
				<div id="header">
					<div id="header-text">
						<span 
							className="header-text-border left-padding right-padding"
							id="header-title">Monty Choy</span>
						<br></br>
						<h3 className="header-description">Hardware Hacker</h3>
						<h3 className="header-description">San Francisco, CA</h3>
					</div>
					
				</div>
			</div>
		)
	}


}
