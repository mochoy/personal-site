import React, { Component } from 'react';

import Filter from './Filter';
import VerticalContentBox from '../VerticalContentBox/index';
import SeeMore from '../SeeMore';


import './index.css';

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.renderProjectItems = this.renderProjectItems.bind(this);

		this.state = {
			seeMore: false,
			filterItems: []
		}
	}

	render () {
		return (
			<div
				className="section"
				id="Projects"
				style={{backgroundColor: this.props.data[0].backgroundColor}}>
				<h3 className="title center-text">Projects</h3>
				{this.renderFilter()}
				<div id="projects-container" className="flex-container-center">
					{this.renderProjectItems()}
				</div>
				{this.renderSeeMore()}
			</div>

		)
	}

	renderFilter() {
		if (this.state.seeMore) {
			return (
				<Filter 
					filterCategories={this.props.filterCategories}
					changeFilterItems={this.changeFilterItems.bind(this)}/>
			)
		}
	}

	changeFilterItems(newFilterItems) {
		this.setState({
			filterItems: newFilterItems
		});
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

		return this.props.data.map(this.renderProjectItem.bind(this));
	
	}

	renderProjectItem(item) {
		let newItem = Object.assign({}, item);
		newItem.img = "projects/" + newItem.img;

		newItem.filterCategories = this.renderFilterCategories(newItem);

		return (
			<VerticalContentBox 
				project={newItem} 
				className="project-box"
				textContainerClassName="project-text-container center"
				imgClassName="project-box-img">

				{newItem.filterCategories}

			</VerticalContentBox>
		)
	}

	renderFilterCategories(item) {
		let categoryTitles = ["Category", "Languages", "Technologies"];
		return (
			<div className="project-filter-categories">
				{
					//map entire filterCategories arr
					item.filterCategories.map((category, i) => {
						return (
							<div className="project-filter-categories">
								<h3 className="overlay-description">{categoryTitles[i]}</h3>
								{
									//map sub filter categories
									category.map((subcategoryText) => {
										return <p className="overlay-description">{subcategoryText}</p>
									})
								}
							</div>
						)
					})
				}
			</div>
		)
	}

	renderSeeMore() {
		if (this.state.seeMore) {
			return (
				<div></div>
			)
		} 

		return (
			<SeeMore onClick={() => this.setState({seeMore: true})}/>
		)
	}


}
