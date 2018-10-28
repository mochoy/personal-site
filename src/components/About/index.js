import React, { Component } from 'react';
import './index.css';

export default class About extends Component {
	render () {
		return (
			<div id="About" className='section'>
				<div className="about-description">
					<h4 className="about-title title">Hi!</h4>
					<p className="about-description-text">
							I like to make cool things with electronics and code and sometimes put them in my Nerf guns. I also like to breakdance. 
					</p>
					<p>I'm a first year electrical engineer at Cal Poly SLO. I learned to code after my brother brought me to my first hackathon and got involved in electronics after he gave me an Arduino kit.</p>
				</div>
			</div>

		)
	}
}
