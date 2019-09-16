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
				style={{backgroundImage: 'url(' + require('assets/images/background/city_through_window.jpg') + ')'}}>
				<div id="header">
					<div id="header-text">
						<h1 id="header-title">Monty Choy</h1>
						<h2 className="header-description">Hardware Hacker</h2>
						<h2 className="header-description">San Francisco, CA</h2>
					</div>

					<div id="intro-btn-container">
						<button className="intro-btn round-btn"
							onClick={() => scrollToElement("#About")}>About</button>
						<button className="intro-btn round-btn"
							onClick={() => scrollToElement("#Projects")}>Projects</button>
						<button className="intro-btn round-btn"
							onClick={() => scrollToElement("#Architecture")}>Architecture</button>
						<button className="intro-btn round-btn"
							onClick={() => scrollToElement("#Tutorials")}>Tutorials</button>
					</div>
					
				</div>
			</div>
		)
	}


}
