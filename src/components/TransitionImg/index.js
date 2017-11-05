import React, { Component } from 'react';
import './index.css';

export default class TransitionImg extends Component {
						// <img src={require('../assets/background.jpg')}/>
	render () {
    const imgLinks = [
      "./assets/transImg1.jpg"
    ]
		return (
			<div id="Transition-img">
        <img
          className="transition-img"
          src={require(imgLinks[this.props.imgKey])}
        />
			</div>

		)
	}
}
