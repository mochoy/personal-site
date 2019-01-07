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
		return (
			<div
				className="section"
				id="Projects"
				style={{backgroundColor: this.props.data[0].backgroundColor}}>
				<h3 className="title center-text">Projects</h3>
				<div id="projects-container" className="flex-container-center">
					{this.renderProjectItems()}
				</div>
				{this.renderSeeMore()}
			</div>

		)
	}

	renderProjectItems() {
		//only render 3 project boxes if not see more
		if (!this.state.seeMore) {
			return this.props.data.map(((item, i) => {
				if (i < 3) {
					return this.renderProjectItem(item);
				}
			}).bind(this));
		}

		this.props.data.map(this.renderProjectItems);
	
	}

	renderProjectItem(item) {
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
			<SeeMore onClick={(() => this.setState({seeMore: true})).bind(this)}/>
		)
	}


}
