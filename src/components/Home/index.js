import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';

import './index.css';

export default class Home extends Component {
	constructor(props) {
    super(props);

	}

	render () {
		return (
			<section id="Intro"
				style={{backgroundImage: 'url(' + require('assets/images/background/city_through_window.jpg') + ')'}}>
				<div id="header">
					<div id="header-text">
						<h1 id="header-title">Monty Choy</h1>
						<h2 className="header-description">Hardware Hacker</h2>
					</div>

				</div>
			</section>
		)
	}


}
