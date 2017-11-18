import React, { Component } from 'react';
import './index.css';

export default class Home extends Component {
	constructor(props) {
    super(props);

		this.animateMobileMenuIcon = this.animateMobileMenuIcon.bind(this);
		this.onClickMobileMenuIcon = this.onClickMobileMenuIcon.bind(this);

		this.state = {
			"isMobileMenuClicked": false,
			"introStyleState": "",
			"introCaptionStyleeState": "intro-caption"
		}
	}

	render () {
		const data = this.props.data;
		const navbarData = data[0].navbarData;
		const navbarItems = navbarData.map(this.renderNavbarItems);

		return (
			<div id="Intro"
				className={this.state.introStyleState}
				style={{backgroundImage: 'url(' + require('assets/bg1.jpg') + ')'}}>
				<div
					id="navbar"
					className="center">
					<h3 id="navbar-title">Monty Choy</h3>
					{navbarItems}
					<div
						id="mobile-menu-icon"
						onClick={(e) => this.onClickMobileMenuIcon(e)}>
						<div className="mobile-menu-icon-bar" id="mobile-menu-icon-bar1"></div>
						<div className="mobile-menu-icon-bar" id="mobile-menu-icon-bar2"></div>
						<div className="mobile-menu-icon-bar" id="mobile-menu-icon-bar3"></div>
					</div>
				</div>
				<div className={this.state.introCaptionStyleeState}>
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

	onClickMobileMenuIcon (e) {
		// if (!this.state.isMobileMenuClicked) {
		// 	this.setState({
		// 		"isMobileMenuClicked": true,
		// 		"introStyleState": "fade",
		// 		"introCaptionStyleeState": "intro-caption-faded"
		// 	});
		// } else if (this.state.isMobileMenuClicked) {
		// 	this.setState({
		// 		"isMobileMenuClicked": false,
		// 		"introStyleState": "",
		// 		"introCaptionStyleeState": "intro-caption"
		// 	});
		// }
	}
}
