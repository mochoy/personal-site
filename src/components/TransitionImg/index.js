import React, { Component } from 'react';
import './index.css';

const imgLinks = [
  "transImg1.jpg"
]
const imgLinkToRender = "assets/transImg1.jpg";

export default class TransitionImg extends Component {
						// <img src={require('../assets/background.jpg')}/>
	render () {
    // const imgLinkToRender = imgLinks[this.props.imgKey];
    // const imgLinkToRender = "assets/transImg1.jpg";
    // const imgToRender = {require("assets/transImg1.jpg")}
		return (
			<div id="Transition-img">
        <img
          className="transition-img"
          src={require(`assets/${imgLinks[this.props.imgKey]}`)}

        />
			</div>

		)
	}
}
