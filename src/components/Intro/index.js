import React, { Component } from 'react';
import './index.css';

export default class Intro extends Component {
	render () {
		return (
			<div id = "intro"> 
				<p> Intro </p>
				<p> {this.props.value} </p>				
			</div>

		)
	}
}