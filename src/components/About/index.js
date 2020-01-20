import React, { Component } from 'react';

import './index.css';

import LinkBtn from '../LinkBtn/index';

export default class About extends Component {
	render () {
		return (
			<section id="About" className='section'>
				<div className="section-content">
					<h1 className="section-title">About Me</h1>

					<div id="about-content-container"
						className="flex-container-center">

						{/* Text Intro */}
						<div style={{width: "30em"}}>
							<p>
								I'm Monty. I'm currently studying <strong>electrical engineering</strong> at <strong>Cal Poly SLO</strong>
							</p>

							{/* Summary */}
							<p>
									I'm an <strong>electrical engineer</strong> with 4+ years of practical experience and a <strong>software engineer</strong> with 8+ years of practical experience.
							</p>

							{/* Hardware */}
							<p>
								On the <strong>hardware</strong> side, I've worked at <strong>Apple</strong> and I run <strong>Suild</strong>. I do DC-DC power electronics, high-speed digital design, MCUs, PCB layout and design,  motor and solenoid drives, and electronics manufacturing and testing.
							</p>

							{/* Software */}
							<p>
								On the <strong>software</strong> side, I primarily focus on <strong>full-stack web development</strong> with the <strong>MERN stack</strong> and bare-metal <strong>firmware</strong>, often times on my own custom hardware. In the past, I've dabbled with Android development and game development.
							</p>

							{/* Hobbies */}
							<p>
									In my free time, I like to breakdance, wrestle, play Yu-Gi-Oh, modify Nerf blasters, and play tennis. 
							</p>
						</div>

						{/* Links */}
						<div id="logos-container">
							{this.props.data.map(this.renderLogos)}
						</div>

					</div>

				</div>
			</section>

		)
	}

	renderLogos(logoData) {
		return (
			<a href={logoData.link} target="_blank" className="about-logo">
				<img className="about-logo-img grow" src={require(`assets/images/logos/${logoData.imgSrc}`)} alt={logoData.name + "logo"}/>
			</a>
		)
	}
}
