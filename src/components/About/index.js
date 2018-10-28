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
				<div id="logos-container">
					<a href="https://github.com/etnom" target="_blank" className="about-logo">
						<img className="about-logo-img" src={require('assets/images/logos/github logo.png')} alt="github logo"/>
					</a>
				</div>
			</div>

		)
	}
}
