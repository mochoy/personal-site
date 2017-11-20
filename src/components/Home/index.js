import React, { Component } from 'react';
import './index.css';

export default class Home extends Component {
	constructor(props) {
    super(props);

		this.renderNavbarItems = this.renderNavbarItems.bind(this);
		this.expandNavbar = this.expandNavbar.bind(this);
		this.collapseNavbar = this.collapseNavbar.bind(this);

		this.animateMobileMenuIcon = this.animateMobileMenuIcon.bind(this);
		this.onClickMobileMenuIcon = this.onClickMobileMenuIcon.bind(this);

		this.showCaption = this.showCaption.bind(this);
		this.hideCaption = this.hideCaption.bind(this);

		this.state = {
			"isMobileMenuClicked": false,
			"introStyleState": "",
			"navbarStyleState": "center navbar",
			"navbarTitleStyleState": "navbar-title",
			"navbarLinkContainerSyleState": "",
			"navbarLinkSyleState": "navbar-link",

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
				<div
					className={this.state.navbarStyleState}>
					<h3 id={this.state.navbarTitleStyleState}>Monty Choy</h3>
					<div className={this.state.navbarLinkContainerSyleState}>
						{navbarItems}
					</div>
					<div
						id="mobile-menu-icon"
						onClick={(e) => this.onClickMobileMenuIcon(e)}>
						<div className="mobile-menu-icon-bar" id="mobile-menu-icon-bar1"></div>
						<div className="mobile-menu-icon-bar" id="mobile-menu-icon-bar2"></div>
						<div className="mobile-menu-icon-bar" id="mobile-menu-icon-bar3"></div>
					</div>
				</div>
				<div className={this.state.introCaptionStyleState}>
					<h1 className={this.state.introTitleStyleState}>Monty Choy</h1>
					<h3 className={this.state.introDescriptionStyleState}>SOFTWARE DEVELOPER/EMBEDDED ELECTRONICS ENGINEER</h3>
					<h3 className={this.state.introDescriptionStyleState}>SAN FRANCISCO, CA</h3>
				</div>
			</div>
		)
	}

	renderNavbarItems (item) {
		return (
			<a href={item.link}
				className={this.state.navbarLinkSyleState}>
				{item.text}
			</a>
		)
	}

	animateMobileMenuIcon () {
		var i = 0;
	}

	onClickMobileMenuIcon (e) {
		if (!this.state.isMobileMenuClicked) {
			this.expandNavbar();
			this.hideCaption();
		} else if (this.state.isMobileMenuClicked) {
			this.collapseNavbar();
			this.showCaption();
		}
	}

	expandNavbar () {
		this.setState({
			"isMobileMenuClicked": true,
			"navbarStyleState": "navbar-accordianed",
			"navbarTitleStyleState": "navbar-title-accordianed",
			"navbarLinkContainerSyleState": "navbar-link-container-accordianed",
			"navbarLinkSyleState": "navbar-link navbar-link-accordianed"
		});
	}

	collapseNavbar () {
		this.setState({
			"isMobileMenuClicked": false,
			"navbarStyleState": "navbar center",
			"navbarTitleStyleState": "navbar-title",
			"navbarLinkSyleState": "navbar-link"
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
