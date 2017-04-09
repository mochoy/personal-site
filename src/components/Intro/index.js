import React, { Component } from 'react';
import './index.css';

export default class Intro extends Component {
	render () {
		return (
			<div id="intro"> 
			
				<div id="introTextContainer"> 
					<h1 id="introText"> Monty Choy </h1>
				</div>
				<div id="descriptionContainer"> 
					<h4 id="descriptionText"> STUDENT | PROGRAMMER | ATHLETE </h4>
				</div>
				<div id="ghLink">
					<a href="https://www.github.com/etnom"><img src="assets/github.png" height="32	px"></img> </a>
				</div>

				

			</div>

		)
	}
}