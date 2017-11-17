import React, { Component } from 'react';
import './index.css';

export default class Home extends Component {
	constructor(props) {
    super(props);

		this.animateMobileMenuIcon = this.animateMobileMenuIcon.bind(this);
	}

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
					<div id="mobile-menu-icon">
						<div className="mobile-menu-icon-bar" id="mobile-menu-icon-bar1"></div>
						<div className="mobile-menu-icon-bar" id="mobile-menu-icon-bar2"></div>
						<div className="mobile-menu-icon-bar" id="mobile-menu-icon-bar3"></div>
					</div>
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

	animateMobileMenuIcon () {
		var i = 0;
	}
}
