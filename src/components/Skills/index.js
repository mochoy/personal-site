import React, { Component } from 'react';

import SkillBar from './SkillBar';

import './index.css';

export default class Skills extends Component {
	render () {
		const { EE_SKILLS, SWE_SKILLS } = this.props.data;

		return (
			<section id="Skills" className='section'>
				<div className="section-content">

					<h1 className="section-title">Skills</h1>
					<div id="skill-bars-container" className="flex-container-center">
						<div className="skill-bar-container">
							<h2 className="center-text">Electrical Engineering</h2>
							<SkillBar 
								skills={EE_SKILLS}
								animationDelay={0}/>
						</div>

						<div className="skill-bar-container">
							<h2 className="center-text">Software Engineering</h2>
							<SkillBar 
								skills={SWE_SKILLS}
								animationDelay={0}/>
						</div>
					</div>

				</div>
			</section>

		)
	}

}
