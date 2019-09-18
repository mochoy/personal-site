import React, { Component } from 'react';
import SkillBar from 'react-skillbars';

import './index.css';

import LinkBtn from '../LinkBtn/index';

const SOFTWARE_ENGINEERING_SKILLS = [
	{type: "React", level: 85},
  {type: "Javascript", level: 75},
]

export default class About extends Component {
	render () {
		let logos = this.props.data.map(this.renderLogos);

		return (
			<section id="About" className='section'>
				<div className="section-content-container">
					<h1 className="section-title">About Me</h1>
					<p>
							I'm Monty. I do hardware system integration, PCB design, embedded programming, and full-stack web development all for my Nerf blasters. I'm studying electrical engineering at Cal Poly SLO. 
					</p>
					<p>
							In my free time, I like to breakdance, wrestle, modify Nerf blasters, and play tennis. 
					</p>
				</div>

				<div id="skill-bars-container">
					<h2 className="center-text">Software Engineering</h2>
					<SkillBar 
						skills={SOFTWARE_ENGINEERING_SKILLS}
						animationDelay={0}/>
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
