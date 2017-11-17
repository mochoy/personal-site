import React, { Component } from 'react';
import './index.css';

export default class Home extends Component {
						// <img src={require('../assets/background.jpg')}/>
	render () {
		const data = this.props.data;
		const navbarData = data[0].navbarData;
		const navbarItems = navbarData.map(this.renderNavbarItems);

		return (
			<div id="Intro"
				style={{backgroundImage: 'url(' + require('assets/bg1.jpg') + ')'}}>
				<div
					id="navbar"
					className="center">
					<h3 id="navbar-title">Monty Choy</h3>
					{navbarItems}
				</div>
				<div className="intro-caption">
					<h1 className="intro-title">Monty Choy</h1>
					<h3 className="intro-description">SOFTWARE DEVELOPER/EMBEDDED ELECTRONICS ENGINEER</h3>
					<h3 className="intro-description">SAN FRANCISCO, CA</h3>
				</div>
			</div>

		)
	}

	renderNavbarItems (item) {
		return (
			<a href={item.link}
			className="navbar-link">
				{item.text}
			</a>
		)
	}
}
