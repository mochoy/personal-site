import React, { Component } from 'react';
import './index.css';

export default class TransitionImg extends Component {
	render () {
		return (
			<div 
        className="Transition"
        >
        <img 
          className="transition-img"
          src={require(`assets/${this.props.link}`)}
        />
			</div>

		)
	}
}
