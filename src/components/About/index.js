import React, { Component } from 'react';
import './index.css';

export default class About extends Component {
						// <img src={require('../assets/background.jpg')}/>
	render () {
		return (
			<div id="About" className='section'>
				<div className="about-description">
					<h3 className="about-title title">About</h3>
					<p>
							I'm <b>Monty</b>, an aspring software developer and senior at <b>Abraham Lincoln High School</b>.
							I began coding when my older
							brother brought me to my first Hackathon, <b>CodeDay</b>, over
							five years ago. I've enriched my coding experiences with classes
							at the City College of San Francisco and <b>Mission Bit</b>, a
							local non-prfit running free
							coding classes around the Bay Area. I currently develop primarily
							in <b>Arduino</b>, but I also have a bit of experience in React,
							Express, and Phaser.
						</p>
					<p>
						Bejond the screen, I enjoy participating in various athletics. I
						represent my school in Varsity <b>Tennis</b> and Varsity <b>Wrestling</b>,
						ocassionally running with the school's Cross Country team in local
						meets. I have also been <b>breakdancing</b> for almost six years,
						performing in the school's talent show and the annual
						Brotherhood-Sisterhood Assembly.Oh yeah, I also modify <b>Nerf blasters</b>.
					</p>
				</div>
				<div className='flex-container'>
					<a
						className="flex-item"
						href="https://github.com/etnom">
						<img
							id="gh-img"
							src="./assets/github.png"
						/>
					</a>
				</div>
			</div>

		)
	}
}
