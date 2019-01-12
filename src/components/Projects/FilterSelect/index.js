import React, { Component } from 'react';

import './index.css';

export default class FilterSelect extends Component {
  constructor (props) {
    super(props);

    this.state = {
      filterCategories: this.setSelectableFilterCategories(true)
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

  render() {
    return (
      <div className="FilterSelect">
        {this.renderSelectableFilterCategories()}
        <div className="flex-container-center">
          <button className="light-blue-btn round-btn"
            onClick={(() => {this.props.toggleAll(true)}).bind(this)}>
            <p className="link-btn-text-content link-btn-txt">Show All</p>
          </button>
          <button className="red-btn round-btn"
            onClick={(() => {this.props.toggleAll(false)}).bind(this)}>
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
        {this.state.filterCategories.map(this.renderIndivSelectableFilterCategory.bind(this))}
      </div>
    )
  }

  //render each category and all the text boxes
  renderIndivSelectableFilterCategory(filterCategory, i) {
    let title = ["Category", "Languages", "Technologies"][i];

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

    this.setState({
      selectableFilterCategories: newSelectableFilterCategories
    });

  }

  toggleAll(toShow) {
    this.setState({
      selectableFilterCategories: this.setSelectableFilterCategories(toShow)
    });
  }

  cloneSelectableFilterCategories() {
    return (this.state.filterCategories.map((filterCategory) => {
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

}

