import React, { Component } from 'react';

import VerticalContentBox from '../VerticalContentBox/index';
import SeeMore from '../SeeMore';


import './index.css';

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			seeMore: false
		}
	}

	render () {
		let projectItems = this.props.data.map(this.renderProjectItems);

		return (
			<div
				className="section"
				id="Projects"
				style={{backgroundColor: this.props.data[0].backgroundColor}}>
				<h3 className="title center-text">Projects</h3>
				<div id="projects-container" className="flex-container-center">
					{projectItems}
				</div>
				{this.renderSeeMore()}
			</div>

		)
	}

	renderProjectItems(item){
		let codeText = (item.code ? "Code" : "");
		let linkText = (item.link ? "Check It Out" : "");
		
		item.img = "projects/" + item.img

		return (
			<VerticalContentBox 
				project={item} 
				className="project-box"
				textContainerClassName="project-text-container center"
				imgClassName="project-box-img"/>
		)
	}

	renderSeeMore() {
		if (this.state.seeMore) {
			return (
				<div></div>
			)
		} 

		return (
			<SeeMore/>
		)
	}


}
