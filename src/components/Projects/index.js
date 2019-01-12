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
			seeMore: true,
			indexesOfProjectItemsToShow: this.generateIndexesOfAllProjectItems(),
			selectableFilterCategories: this.setSelectableFilterCategories()
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

	setSelectableFilterCategories() {
    return (this.props.filterCategories.map((filterCategory) => {
      return filterCategory.sort().map((filterCategoryItem) => {
        return {
          name: filterCategoryItem,
          isSelected: true
        }
      })
    }))
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
		return (
			this.props.data.map(((item, i) => {
				//more
				if (!this.state.seeMore) {
					//only render 3 project boxes if not see more
					if (i < 3) {
						return this.renderProjectItem(item, true);
					}
				}

				//see more
				//at least 1 project is being shown
				if (this.state.indexesOfProjectItemsToShow.length > 0) { 
					let isVisible = true;
					//project isn't in index of items to show, so it should be hidden
					if (this.state.indexesOfProjectItemsToShow.indexOf(i) === -1) {
						isVisible = false;
					}

					return this.renderProjectItem(item, isVisible);
				}

			}).bind(this))
		)

		//no projects are being shown
		 return (
		 	<div>
		 		<h2 className="center-text">Nothing here!</h2> 
		 		<p className="center-text">Try selecting more filter tags.</p>
		 	</div>
	 	)
	
	}

	//renders individual project item based on index in data arr
	renderProjectItem(item, isVisible) {
		let newItem = Object.assign({}, item);
		newItem.img = "projects/" + newItem.img;

		let className = isVisible ? "project-box" : "invisible-project-box";

		return (
			<VerticalContentBox 
				project={newItem} 
				className={className}
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
			indexesOfProjectItemsToShow: this.getIndexesOfProjectsToShow(this.getUnselectedFilterItems(newFilterItems), newFilterItems),
			selectableFilterCategories: newFilterItems
		});
	}

	//returns isSelected flag of a filter item based on its category and item
	//category and item can be indexes or strings, but they both need to be the same type
	//this method may be called upon updating filter items, so if the state hasn't been updated yet, compare to newFilterItems
	isFilterItemSelected(category, item, newFilterItems) {
		//if category and item are strings
		if (isNaN(category) && isNaN(item)) {
			let categoryIndex = this.findIndexOfCategory(category);

			//if newFilterItems isn't passed in, so compare to state
			//not working
			if (!newFilterItems) {
				//iterate only through the category that is being searched through
				for (let i = 0; i < this.state.selectableFilterCategories[categoryIndex].length; i++) {
					if (this.state.selectableFilterCategories[categoryIndex][i].isSelected) {
						return true;
					}
				}

				return false;
			}

			//newFilterItems passed in, so compare to that since it's more up to date
			let categoryItemIndex = this.findIndexOfCategoryItem(item, categoryIndex);
			if (newFilterItems[categoryIndex][categoryItemIndex].isSelected) {
				return true;
			}

			return false;

		}

		//if category and item aren't strings
		if (this.state.selectableFilterCategories[category][item].isSelected) {
    	return true;
    }

    return false;
	}

	//returns index of category based on it's name, a string
	//reads from member var of all category names
	findIndexOfCategory(category) {
		for (let i = 0; i < this.filterCategoryTitles.length; i++) {
			if (this.filterCategoryTitles[i] === category) {
				return i;
			}
		}
	}

	//returns index of category item based on it's name (string) and its category (index)
	findIndexOfCategoryItem(categoryItem, categoryIndex) {
		let category = this.state.selectableFilterCategories[categoryIndex];
		
		for (let i = 0; i < category.length; i++) {
			if (category[i].name === (categoryItem.name || categoryItem)) {
				return i;
			}
		}
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


		return unselectedFilterItems;
	}

	//gets indexes of projects to show based on what categories are selected
	//if a project's category items are in unselectedFilterItems, it should not be displayed
	getIndexesOfProjectsToShow(unselectedFilterItems, newFilterItems) {
		let indexesOfProjectItemsToShow = [];

		//iterate though all data items
		this.props.data.map((project, i) => {
			let shouldItemBeVisible = true;
			//iterate through all filter categories
			//use for loop so the loop can be broken (maps can't be broken)
			for (let filterCategoryIndex = 0; filterCategoryIndex < project.filterCategories.length; filterCategoryIndex++) {
				let filterCategory = project.filterCategories[filterCategoryIndex];

				//iterate through all filter items
				//use for loop so the loop can be broken (maps can't be broken)
				for (let filterItemIndex = 0; filterItemIndex < filterCategory.length; filterItemIndex++) {
					let projectFilterItem = filterCategory[filterItemIndex];

					//if the filter category shouldn't be displayed
					if (!this.isFilterItemSelected(this.filterCategoryTitles[filterCategoryIndex], projectFilterItem, newFilterItems)) {
						shouldItemBeVisible = false;
						break;
					}
				}

				//item shouldn't be visible, break loop and start validating next project
				if(!shouldItemBeVisible) {
					break
				}

			}

			if (shouldItemBeVisible) {
				indexesOfProjectItemsToShow.push(i);
			}
		});

		return indexesOfProjectItemsToShow;
	}

}
