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
				style={{backgroundImage: 'url(' + require('assets/hawaii-resort.jpg') + ')'}}>
				<div id="header">
					<div id="header-text">
						<span 
							className="header-text-border left-padding right-padding"
							id="header-title">Monty Choy</span>
						<br></br>
						<span 
							className="header-text-border header-description left-padding">Hardware</span>
						<span 
							className="header-text-border header-description left-padding right-padding">Hacker</span>
						<br></br>
						<span 
							className="header-text-border header-description left-padding">San</span>
						<span 
							className="header-text-border header-description left-padding right-padding">Francisco,</span>
						<span 
							className="header-text-border header-description right-padding">
							CA</span>
					</div>
					
				</div>
			</div>
		)
	}


}
