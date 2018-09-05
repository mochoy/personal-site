import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';
import './index.css';

export default class Home extends Component {
	constructor(props) {
    super(props);

		this.renderNavbarItems = this.renderNavbarItems.bind(this);

		this.scrollToElement = this.scrollToElement.bind(this);

		this.onClickMobileMenuIcon = this.onClickMobileMenuIcon.bind(this);
		this.animateMenuIcon = this.animateMenuIcon.bind(this);

		this.expandNavbar = this.expandNavbar.bind(this);
		this.collapseNavbar = this.collapseNavbar.bind(this);

		this.showCaption = this.showCaption.bind(this);
		this.hideCaption = this.hideCaption.bind(this);

		this.state = {
			"isMobileMenuClicked": false,
			"menuIconStyleState": "mobile-menu-icon-bar",

			"introStyleState": "",
			"navbarStyleState": "navbar",
			"navbarLinkContainerStyleState": "navbar-link-container",
			"navbarLinkStyleState": "navbar-link",

			"introCaptionStyleState": "intro-caption",
			"introTitleStyleState": "intro-title",
			"introDescriptionStyleState": "intro-description"
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
				<div id="header">
					<h1 className={this.state.introTitleStyleState}>Monty Choy</h1>
					<h3 className={this.state.introDescriptionStyleState}>Hardware Hacker</h3>
					<h3 className={this.state.introDescriptionStyleState}>San Francisco, CA</h3>
				</div>
			</div>
		)
	}

	renderNavbarItems (item) {
		return (
			<a onClick={(e) => this.scrollToElement(e, item.link)}
				className={this.state.navbarLinkStyleState}>
				{item.text}
			</a>
		)
	}

	scrollToElement (e, link) {
		scrollToElement('#' + link);
	}

	onClickMobileMenuIcon (e) {
		if (!this.state.isMobileMenuClicked) {
			this.animateMenuIcon(true);
			this.expandNavbar();
			this.hideCaption();
		} else if (this.state.isMobileMenuClicked) {
			this.animateMenuIcon(false);
			this.collapseNavbar();
			this.showCaption();
		}
	}

	animateMenuIcon (toShow) {
		if (toShow) {
			this.setState({
				"isMobileMenuClicked": true,
				"menuIconStyleState": "mobile-menu-icon-bar mobile-menu-icon-bar-animated",
			});
		} else {
			this.setState({
				"isMobileMenuClicked": false,
				"menuIconStyleState": "mobile-menu-icon-bar",
			});
		}
		
	}

	expandNavbar () {
		this.setState({
			"navbarStyleState": "navbar-accordianed",
			"navbarLinkContainerStyleState": "navbar-link-container-accordian",
			"navbarLinkStyleState": "navbar-link navbar-link-accordianed"
		});
	}

	collapseNavbar () {
		this.setState({
			"navbarStyleState": "navbar",
			"navbarLinkContainerStyleState": "navbar-link-container-accordian",
			"navbarLinkStyleState": "navbar-link"
		});
	}

	showCaption () {
		this.setState({
			"introCaptionStyleState": "intro-caption",
			"introTitleStyleState": "intro-title",
			"introDescriptionStyleState": "intro-description"
		});
	}

	hideCaption () {
		this.setState({
			"introCaptionStyleState": "hidden",
			"introTitleStyleState": "hidden",
			"introDescriptionStyleState": "hidden"
		});
	}

}
