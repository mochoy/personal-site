import React, { Component } from 'react';

import FilterSelect from './FilterSelect';
import VerticalContentBox from '../VerticalContentBox/index';
import SeeMore from '../SeeMore';
import OverlayFilterCategories from './OverlayFilterCategories';


import './index.css';

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.renderProjectItems = this.renderProjectItems.bind(this);

		this.state = {
			seeMore: false,
			selectableFilterCategories: this.setSelectableFilterCategories(true)
		}
	}

	 //populates this.state.selectableFilterCategories with properly structured arr of all filter categories and isSelected flag
  setSelectableFilterCategories(isSelected) {
    return (this.props.filterCategories.map((filterCategory) => {
      return filterCategory.sort().map((filterCategoryItem) => {
        return {
          name: filterCategoryItem,
          isSelected: isSelected
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
					toggleFilterItem={this.changeFilterItems.bind(this)}
					hideAll={this.hideAll.bind(this)}
					showAll={this.showAll.bind(this)}/>
			)
		}
	}

	cloneSelectableFilterCategories() {
		return (this.state.selectableFilterCategories.map((filterCategory) => {
      return filterCategory.sort().map((filterCategoryItem) => {
        return filterCategoryItem
      })
    }))
	}

	changeFilterItems(i, n) {
		let newSelectableFilterCategories = this.cloneSelectableFilterCategories();
		newSelectableFilterCategories[i][n].isSelected = !newSelectableFilterCategories[i][n].isSelected;

		this.setState({
			selectableFilterCategories: newSelectableFilterCategories
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

		return (
			<VerticalContentBox 
				project={newItem} 
				className="project-box"
				textContainerClassName="project-text-container center"
				imgClassName="project-box-img">

				<OverlayFilterCategories filterCategories={newItem.filterCategories}/>

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

	hideAll() {
		this.setState({
			selectableFilterCategories: this.setSelectableFilterCategories(false)
		});
	}

	showAll() {
		this.setState({
			selectableFilterCategories: this.setSelectableFilterCategories(true)
		});
	}


}
