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
					<h1 id="header-title">Monty Choy</h1>
					<h3 className="header-description">Hardware Hacker</h3>
					<h3 className="header-description">San Francisco, CA</h3>
				</div>
			</div>
		)
	}


}
