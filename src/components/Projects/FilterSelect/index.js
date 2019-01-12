import React, { Component } from 'react';

import './index.css';

export default class FilterSelect extends Component {
  componentWillMount() {
    //set parent's state var selectableFilterItems when FilterSelect is mounted
    //When the filter items are rendered in FilterSelect (here), they pull from the props
    //when the filter items should be changed, they're  changed from the parent (Projects)
    //Parent's filterItems is first set as purely the data from the data.js file until it's init here
    this.props.updateSelectableFilterItems(this.setSelectableFilterCategories(true));
  }

  //populates Parent's (Projects component) selectableFilterCategories with properly structured arr of all filter categories and isSelected flag
  setSelectableFilterCategories(isSelected) {
    return (this.props.filterCategories.map((filterCategory) => {
      return filterCategory.sort().map((filterCategoryItem) => {
        return {
          name: filterCategoryItem.name || filterCategoryItem,
          isSelected: isSelected
        }
      })
    }))
  }

  render() {
    return (
      <div className="FilterSelect">
        {this.renderSelectableFilterCategories()}
        <div className="flex-container-center">
          <button className="light-blue-btn round-btn"
            onClick={(() => {this.toggleAll(true)}).bind(this)}>
            <p className="link-btn-text-content link-btn-txt">Show All</p>
          </button>
          <button className="red-btn round-btn"
            onClick={(() => {this.toggleAll(false)}).bind(this)}>
            <p className="link-btn-text-content link-btn-txt">Hide All</p>
          </button>
        </div>
      </div>
    );
  }

  //render all selectable filter categories
  //renders from state data because it's formatted correctly with both the name and isSelected flag
  renderSelectableFilterCategories() {
    return (
      <div className="flex-container-center">
        {this.props.filterCategories.map(this.renderIndivSelectableFilterCategory.bind(this))}
      </div>
    )
  }

  //render each category and all the text boxes
  renderIndivSelectableFilterCategory(filterCategory, i) {
    let title = ["Categories", "Languages", "Technologies"][i];

    return (
      <div className="selectable-filter-category-container">
        <h3 className="selectable-filter-category-title center-text">{title}</h3>
        {//render all items
          filterCategory.map(((item, n) => {
            return (
              <p className={item.isSelected ? "selected-filter-category-text filter-category-text" : "unselected-filter-category-text filter-category-text"}
                onClick={(() => {
                  //i is index of all filter categories
                  //n is index of item in the arr of its category
                  this.toggleFilterItem(i, n);
                }).bind(this)}>
                {item.name}</p>
            )
          }).bind(this))
        }
      </div>
    )
  }

  //i is index of all filter categories
  //n is index of item in the arr of its category
  toggleFilterItem(i, n) {
    let newSelectableFilterCategories = this.cloneSelectableFilterCategories();
    newSelectableFilterCategories[i][n].isSelected = !newSelectableFilterCategories[i][n].isSelected;

    this.props.updateSelectableFilterItems(newSelectableFilterCategories);
  }

  toggleAll(toShow) {
    this.props.updateSelectableFilterItems(this.setSelectableFilterCategories(toShow));
  }

  cloneSelectableFilterCategories() {
    return (this.props.filterCategories.map((filterCategory) => {
      return filterCategory.sort().map((filterCategoryItem) => {
        return filterCategoryItem
      })
    }))
  }

  changeFilterItems(i, n) {
    let newSelectableFilterCategories = this.cloneSelectableFilterCategories();
    newSelectableFilterCategories[i][n].isSelected = !newSelectableFilterCategories[i][n].isSelected;

    this.props.updateSelectableFilterItems(newSelectableFilterCategories);
  }

}

