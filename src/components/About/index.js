import React, { Component } from 'react';
import './index.css';

export default class About extends Component {
	render () {
		return (
			<div id="About" className='section'>
				<div className="about-description">
					<h4 className="about-title title">Hi!</h4>
					<p className="about-description-text">
							I'm Monty. I like to make cool things with electronics and code and sometimes put them in my Nerf guns. I also like to breakdance. 
					</p>
					<p>I'm a first year electrical engineer at Cal Poly SLO. I learned to code after my brother brought me to a hackathon and got involved in electronics when he gifted me an Arduino kit a few years later.</p>
				</div>
				<h3 className="center-text">Find me here:</h3>
				<div id="logos-container">
					<a href="https://github.com/etnom" target="_blank" className="about-logo grow">
						<img className="about-logo-img" src={require('assets/images/logos/github logo.png')} alt="github logo"/>
					</a>
					<a href="https://www.linkedin.com/in/montychoy/" target="_blank" className="about-logo grow">
						<img className="about-logo-img" src={require('assets/images/logos/linkedin.png')} alt="linkedin logo"/>
					</a>
					<a href="mailto:mochoy@calpoly.edu" target="_blank" className="about-logo grow">
						<img className="about-logo-img" src={require('assets/images/logos/email.png')} alt="email logo"/>
					</a>
				</div>
			</div>

		)
	}
}
