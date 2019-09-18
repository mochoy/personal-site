import React, { Component } from 'react';
import SkillBar from 'react-skillbars';

import './index.css';

const SOFTWARE_ENGINEERING_SKILLS = [
	{type: "React", level: 85},
  {type: "Javascript", level: 75},
]

export default class Skills extends Component {
	render () {
		return (
			<section id="Skills" className='section'>
				<h1 className="section-title">Skills</h1>
				<h2 className="center-text">Software Engineering</h2>
					<SkillBar 
						skills={SOFTWARE_ENGINEERING_SKILLS}
						animationDelay={0}/>

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
