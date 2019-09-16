import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';

import './index.css';

export default class Home extends Component {
	constructor(props) {
    super(props);

	}

	render () {
		return (
			<section id="Intro">
				<div
					className="background-img"
					style={{
						backgroundImage: 'url(' + require('assets/images/background/architecture-buildings-city-hk.jpg') + ')'}}
				/>

				<div id="welcome">
					<h1>Hi, I'm <strong>Monty Choy</strong></h1>
					<h2>Hardware Hacker</h2>
				</div>
			</section>
		)
	}


}
