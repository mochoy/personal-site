import React, { Component } from 'react';
import './index.css';

export default class Home extends Component {
						// <img src={require('../assets/background.jpg')}/>
	render () {
		return (
			<div id="Intro"
				style={{backgroundImage: 'url(' + require('assets/bg1.jpg') + ')'}}>
				<div
					id="navbar"
					className="center">
					<h3 id="navbar-title">Monty Choy</h3>
					<a href="default.asp"
					className="navbar-link">
						About
					</a>
					<a href="default.asp"
					className="navbar-link">
						Projects
					</a>
					<a href="default.asp"
					className="navbar-link">
						Blasters
					</a>
					<a href="default.asp"
					className="navbar-link">
						Architecture
					</a>
					<a href="default.asp"
					className="navbar-link">
					Tutorials
					</a>
				</div>
				<div className="intro-caption">
					<h1 className="intro-title">Monty Choy</h1>
					<h3 className="intro-description">SOFTWARE DEVELOPER/EMBEDDED ELECTRONICS ENGINEER</h3>
					<h3 className="intro-description">SAN FRANCISCO, CA</h3>
				</div>
			</div>

		)
	}
}
