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
				</div>
				<div id="logos-container">
				</div>
			</div>

		)
	}
}
