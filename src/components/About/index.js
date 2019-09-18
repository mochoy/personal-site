import React, { Component } from 'react';
import SkillBar from 'react-skillbars';

import './index.css';

import LinkBtn from '../LinkBtn/index';

export default class About extends Component {
	render () {
		return (
			<section id="About" className='section'>
				<h1 className="section-title">About Me</h1>
				<p>
						I'm Monty. I'm an electrical engineer with 3 years of practical experience and a software engineer with 7 years of practical experience. I do hardware system integration, PCB design, embedded programming, and full-stack web development all for my Nerf blasters. I'm currently studying electrical engineering at Cal Poly SLO. 
				</p>
				<p>
						In my free time, I like to breakdance, wrestle, modify Nerf blasters, and play tennis. 
				</p>
				
				<p className="center-text">Check out the source code for this React project:</p>
				<div className="flex-container-center">
					<LinkBtn
						className={"round-btn link-btn-green-content"}
						textClassName={"link-btn-text-content"}
						link={"https://github.com/mochoy/personal-site"}
						text={"Code"}/>
				</div>

				<h2 className="center-text">Find me here:</h2>
				<div id="logos-container" className="flex-container-center">
					{this.props.data.map(this.renderLogos)}
				</div>

			</section>

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
