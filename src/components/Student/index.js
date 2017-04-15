import React, { Component } from 'react';
import './index.css';

export default class Student extends Component {
	render () {
		return (
			<div id="Student"> 
				<div id="titleContainer">
					<h2 id="title">STUDENT</h2>
				</div>
				<p className="student-description"> Monty attends Abraham Lincoln High School as a junior. He takes part in the ACE (Architecture, Construction, Engineering) Pathway for the third year, an accelerated, highly selective pathway of gifted students focusing on ACE, participating in competitions with industry professionals invloving designing, drafting, and modeling original, complex yet harmonic structures using the elements and principles of design as well as experience analyzing and comprehending visual art in the ACE Pathway's second year course, AP Art History. 
				</p>
				<p className="student-description">Monty continues to challenge himself in school, balancing a 4.3 GPA with one of the most advanced and difficult set of courses available for juniors at Lincoln.
				</p>
			</div>

		)
	}
}