import React, { Component } from 'react';
import './index.css';

export default class About extends Component {
	render () {
		return (
			<div id="About" className='section'>
				<div className="about-description">
					<h1 className="about-title title">Hi!</h1>
					<p className="about-description-text">
							I'm Monty. I like to make cool things with electronics and code and sometimes put them in my Nerf guns. I also like to breakdance. 
					</p>
					<p>I'm a first year electrical engineer at Cal Poly SLO. I learned to code after my brother brought me to a hackathon and got involved in electronics when he gifted me an Arduino kit a few years later.</p>
				</div>
				<h2 className="center-text">Find me here:</h2>
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
					<a href="https://www.facebook.com/monty.choy" target="_blank" className="about-logo grow">
						<img className="about-logo-img" src={require('assets/images/logos/facebook.png')} alt="facebook logo"/>
					</a>
					<a href="https://www.instagram.com/darn_bok_choi_is_taken/" target="_blank" className="about-logo grow">
						<img className="about-logo-img" src={require('assets/images/logos/instagram.jpg')} alt="instagram logo"/>
					</a>
					<a href="https://paypal.me/suild" target="_blank" className="about-logo grow">
						<img className="about-logo-img" src={require('assets/images/logos/paypal.jpg')} alt="paypal logo"/>
					</a>
					<a href="https://suild.com" target="_blank" className="about-logo grow">
						<img className="about-logo-img" src={require('assets/images/logos/Suild Logo.png')} alt="suild logo"/>
					</a>
				</div>
			</div>

		)
	}
}
