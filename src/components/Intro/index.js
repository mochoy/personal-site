import React, { Component } from 'react';
import './index.css';

export default class Intro extends Component {
						// <img src={require('../assets/background.jpg')}/>
	render () {
		return (
			<div id="Intro">
				<div className="intro-caption">
					<h1 className="intro-title">Monty Choy</h1>
					<h3 className="intro-description">SOFTWARE DEVELOPER/EMBEDDED ELECTRONICS ENGINEER</h3>
					<h3 className="intro-description">SAN FRANCISCO, CA</h3>
				</div>
			</div>

		)
	}
}
