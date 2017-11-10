import React, { Component } from 'react';
import './index.css';

const imgLinks = [
  "transImg1.jpg"
]
const imgLinkToRender = "assets/transImg1.jpg";

export default class TransitionImg extends Component {
						// <img src={require('../assets/background.jpg')}/>
	render () {
    let imgToRender = this.props.link;
		return (
			<div id="Transition-img">
        <img
          className="transition-img"

        />
			</div>

		)
	}
}
