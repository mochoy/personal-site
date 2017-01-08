import React, { Component } from 'react';
import './index.css';

export default class Intro extends Component {
	render () {
		return (
			<div id="intro"> 
				<div id="introText"> 
					<div id="bauhaus">
						<img id="bauhausImg" src="assets/bauhaus.jpg"/>
					</div>
					<h1> Monty Choy </h1>
				</div>

			</div>

		)
	}
}