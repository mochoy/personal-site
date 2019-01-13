import React, { Component } from 'react';
import './index.css';

import LinkBtn from '../LinkBtn/index';

export default class About extends Component {
	render () {
		let logos = this.props.data.map(this.renderLogos);

		return (
			<div id="About" className='section'>
				<div className="about-description-container">
					<h1 className="about-title title">Hi!</h1>
					<p className="about-description-text">
							I'm Monty. I like to make cool things with electronics and code and sometimes put them in my Nerf blasters. I'm currently interning at Apple as an electrical engineer on the Apple TV team. I also like to breakdance. 
					</p>
					<p className="about-description-text">
						I'm a first year electrical engineering student at Cal Poly SLO. I learned to code after my brother brought me to a hackathon and got involved in electronics when he gifted me an Arduino kit a few years later.
					</p>
					<p className="about-description-text">
					 I used to make games, but they took too long. They were mainly 3D games in Unity or web games with Phaser. I also can't draw or animate so that meant all my games were really ugly. I currently like to work in full-stack web development using the MERN stack. </p>
					<p className="about-description-text">
						On a lower level, I write firmware for Arduino, although I'm currently exploring other micrcontrollers, and design PCBs that go into my Nerf blasters. My go-to PCB editor and schematic capture tool is EagleCAD where I often design PCBs that are essentially Arduino shields and other cool things. 
					</p>
				</div>
				<p className="center-text">Check out the source code for this React project:</p>
				<div className="flex-container-center">
					<LinkBtn
						className={"round-btn link-btn-green-content"}
						textClassName={"link-btn-text-content"}
						link={"https://github.com/mochoy/personal-site"}
						text={"Code"}/>
				</div>
				<h2 className="center-text">Find me here:</h2>
				<div id="logos-container">
					{logos}
				</div>
			</div>

		)
	}

	renderLogos(logoData) {
		return (
			<a href={logoData.link} target="_blank" className="about-logo grow">
				<img className="about-logo-img" src={require(`assets/images/logos/${logoData.imgSrc}`)} alt={logoData.name + "logo"}/>
			</a>
		)
	}
}
