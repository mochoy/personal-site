import React, { Component } from 'react';

import './index.css';

import LinkBtn from '../LinkBtn/index';

export default class About extends Component {
	render () {
		const contentWidth = "30em";

		return (
			<section id="About" className='section'>
				<div className="section-content">
					<h1 className="section-title">About Me</h1>

					<div id="about-content-container"
						className="flex-container-center">

						{/* Text Intro */}
						<div style={{width: contentWidth}}>
							<p>
									I'm Monty. I'm an <strong>electrical engineer</strong> with 3+ years of practical experience and a <strong>software engineer</strong> with 7+ years of practical experience. I do <strong>hardware system integration</strong>, PCB design, <strong>power electronics</strong>, embedded programming, and <strong>full-stack web development</strong> all for my <strong>Nerf blasters</strong>. I'm currently studying electrical engineering at Cal Poly SLO. 
							</p>
							<p>
									In my free time, I like to breakdance, wrestle, play Yu-Gi-Oh, modify Nerf blasters, and play tennis. 
							</p>
						</div>

						{/* Links */}
						<div id="logos-container" 
							className="flex-container-center"
							style={{width: contentWidth}}
						>
							{this.props.data.map(this.renderLogos)}
						</div>

					</div>

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
