import React, { Component } from 'react';

import './index.css';


export default class Experience extends Component {
  render() {
  	const DATA = this.props.data;

    return (
      <section id="Experience" className="section-dark">
      	<div className="section-content">
      		
      		<h1 className="section-dark-title">Experience</h1>

      		<div id="experience-items-container">
      			{ DATA.map(experience => {
	      			return (
	      				<div className="experience-item flex-container-center">
		      				<div className="experience-item-content left">
		      					<h3 className="experience-item-title-and-name">
		      						{experience.title + " @ " + experience.name}
	      						</h3>
		      					<h3 className="experience-item-name">{experience.name}</h3>
		      					<p>{experience.location}</p>
		      					<p>{experience.date}</p>
		      				</div>

		      				<div className="experience-item-content right">
		      					<h3 className="experience-item-title">{experience.title}</h3>
		      					{ experience.content.map(contentItem => {
		      						return (
		      							<li>{contentItem}</li>
      								)
		      					})}
		      				</div>
		      			</div>
	    				)
	      		}) }
      		</div>
      		
      	</div>
       
      </section>
    );
  }
}

