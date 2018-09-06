import React, { Component } from 'react';
import './index.css';

export default class About extends Component {
	render () {
		return (
			<div id="About" className='section'>
				<div className="about-description">
					<h1 id="about-title">About Me</h1>
					<p>
							I'm <b>Monty</b>, an aspring software developer and senior at <b>Abraham Lincoln High School</b>.
							I began coding when my older
							brother brought me to my first Hackathon, <b>CodeDay</b>, over
							five years ago. I've enriched my coding experiences with classes
							at the City College of San Francisco and <b>Mission Bit</b>, a
							local non-profit running free
							coding classes around the Bay Area. I currently develop primarily
							for <b>Arduino</b>, but I also have a bit of experience in React,
							Express, and Phaser.
						</p>
					<p>
						Bejond the screen, I enjoy participating in various athletics. I
						represent my school in Varsity <b>Tennis</b> and Varsity <b>Wrestling</b>,
						ocassionally running with the school's Cross Country team in local
						meets. I have also been <b>breakdancing</b> for almost six years,
						performing in the school's talent show and the annual
						Brotherhood-Sisterhood Assembly. Oh yeah, I also <b>modify Nerf
							blasters</b>.
					</p>
				</div>
				<div className='flex-container'>
					<a
						className="flex-item"
						href="https://github.com/etnom"
						target="_blank">
						<img
							id="gh-img"
							src={require("assets/github.png")}
						/>
					</a>
				</div>
			</div>

		)
	}
}
