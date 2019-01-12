import React, { Component } from 'react';

import FilterSelect from './FilterSelect';
import VerticalContentBox from '../VerticalContentBox/index';
import SeeMore from '../SeeMore';
import OverlayFilterCategories from './OverlayFilterCategories';


import './index.css';

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.filterCategoryTitles = ["Categories", "Languages", "Tools & Technologies"];

		this.renderProjectItems = this.renderProjectItems.bind(this);

		this.state = {
			seeMore: false,
			indexesOfProjectItemsToShow: this.generateIndexesOfAllProjectItems(),
			selectableFilterCategories: this.props.filterCategories
		}
	}

	//generates indexes of all project items, so basically just 0 to num of projects - 1
	generateIndexesOfAllProjectItems() {
		let allIndexes = [];

		for (let i = 0; i < this.props.data.length; i++) {
			allIndexes.push(i);
		}

		return allIndexes;
	}

	render () {
		return (
			<div
				className="section"
				id="Projects"
				style={{backgroundColor: this.props.data[0].backgroundColor}}>
				<h3 className="title center-text">Projects</h3>
				{this.renderFilterSelect()}
				<div id="projects-container" className="flex-container-center">
					{this.renderProjectItems()}
				</div>
				{this.renderSeeMore()}
			</div>

		)
	}

	renderFilterSelect() {
		if (this.state.seeMore) {
			return (
				<FilterSelect 
					filterCategories={this.state.selectableFilterCategories}
					filterCategoryTitles={this.filterCategoryTitles}
					updateSelectableFilterItems={this.updateSelectableFilterItems.bind(this)}/>
			)
		}
	}

	renderProjectItems() {
		//only render 3 project boxes if not see more
		if (!this.state.seeMore) {
			return this.state.indexesOfProjectItemsToShow.map(((indexOfItemToShow, i) => {
				if (i < 3) {
					return this.renderProjectItem(indexOfItemToShow);
				}
			}).bind(this));
		}

		return this.state.indexesOfProjectItemsToShow.map(((indexOfItemToShow) => {
			return this.renderProjectItem(indexOfItemToShow)
		}).bind(this)); 
	
	}

	//renders individual project item based on index in data arr
	renderProjectItem(indexOfItemToShow) {
		let newItem = Object.assign({}, this.props.data[indexOfItemToShow]);
		newItem.img = "projects/" + newItem.img;

		return (
			<VerticalContentBox 
				project={newItem} 
				className="project-box"
				textContainerClassName="project-text-container center"
				imgClassName="project-box-img">

				<OverlayFilterCategories 
					filterCategories={newItem.filterCategories}
					filterCategoryTitles={this.filterCategoryTitles}/>

			</VerticalContentBox>
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

	updateSelectableFilterItems(newFilterItems) {
		this.setState({
			indexesOfProjectItemsToShow: this.getIndexesOfProjectsToShow(this.getUnselectedFilterItems(newFilterItems)),
			selectableFilterCategories: newFilterItems
		});
	}

	//returns isSelected flag of a filter item based on its category and item
	//category and item can be indexes or strings, but they both need to be the same type
	isFilterItemSelected(category, item) {
		//if category and item are strings
		if (isNaN(category) && isNaN(item)) {
			let title = ["Categories", "Languages", "Technologies"];

		}

		//if category and item aren't strings
		if (this.state.selectableFilterCategories[category][item].isSelected) {
    	return true
    }

    return false
	}

	//returns 2d arr of all unselected filter items
	getUnselectedFilterItems(filterItems) {
		let unselectedFilterItems = [];

		filterItems.map((category) => {
			category.map((filterItem) => {
				if (filterItem.isSelected) {
					unselectedFilterItems.push(filterItem);
				}
			});
		});


		return unselectedFilterItems
	}

	//gets indexes of projects to show based on what categories are selected
	getIndexesOfProjectsToShow(unselectedFilterItems) {
		console.log(unselectedFilterItems)

		return [];
	}

}
