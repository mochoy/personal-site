import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';
import { Parallax, Background } from 'react-parallax';

import './index.css';

export default class Home extends Component {
	constructor(props) {
    super(props);

	}

	render () {
		const insideStyles = {
		  background: "white",
		  padding: 20,
		  position: "absolute",
		  // top: "50%",
		  left: "50%",
		  transform: "translate(-50%,-0%)"
		};

		return (
			<div id="Intro">
				{/*
					style={{backgroundImage: 'url(' + require('assets/images/background/hawaii-beach.jpg') + ')'}}>
				*/}	

				<Parallax
          blur={10}
          bgImage={require('assets/images/background/city_through_window.jpg')}
          bgImageAlt="city_through_window"
          strength={200}
          style={{ height: '100%' }}
        > 
        	<div style={{ height: '100px' }}>     
	          <div style={insideStyles}>
	        		<p>Put some text content here - even an empty div with fixed dimensions to have a height for the parallax.</p>
	        	</div>
        	</div>
        </Parallax>

        {/*
				<div id="header">
					<div id="header-text">
						<h1 id="header-title">Monty Choy</h1>
						<h2 className="header-description">Hardware Hacker</h2>
						<h2 className="header-description">San Francisco, CA</h2>
					</div>

					<div id="intro-btn-container">
						<button className="intro-btn round-btn"
							onClick={() => scrollToElement("#About")}>About</button>
						<button className="intro-btn round-btn"
							onClick={() => scrollToElement("#Projects")}>Projects</button>
						<button className="intro-btn round-btn"
							onClick={() => scrollToElement("#Architecture")}>Architecture</button>
						<button className="intro-btn round-btn"
							onClick={() => scrollToElement("#Tutorials")}>Tutorials</button>
					</div>
					
				</div>
			*/}
			</div>
		)
	}


}
