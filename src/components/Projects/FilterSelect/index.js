import React, { Component } from 'react';

import './index.css';

export default class FilterSelect extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selectableFilterCategories: this.populateSelectableFilterCategories()
    }
  }

  //populates this.state.selectableFilterCategories with properly structured arr of all filter categories and isSelected flag
  populateSelectableFilterCategories() {
    return (this.props.filterCategories.map((filterCategory) => {
      return filterCategory.sort().map((filterCategoryItem) => {
        return {
          name: filterCategoryItem,
          isSelected: true
        }
      })
    }))
  }

  render() {
    return (
      <div className="FilterSelect">
        {this.renderSelectableFilterCategories()}
      </div>
    );
  }

  renderSelectableFilterCategories() {
    return (
      <div className="flex-container-center">
        {this.props.filterCategories.map(this.renderIndivSelectableFilterCategory.bind(this))}
      </div>
    )
  }

  renderIndivSelectableFilterCategory(filterCategory, i) {
    let title = ["Category", "Languages", "Technologies"][i];

    return (
      <div className="selectable-filter-category-container">
        <h3 className="selectable-filter-category-title center-text">{title}</h3>
        {//render all items
          filterCategory.map(((item, n) => {
            let isSelected = this.state.selectableFilterCategories[i][n];
            return (
              <p className={isSelected ? "selected-filter-category-text filter-category-text" : "unselected-filter-category-text filter-category-text"}>{item}</p>
            )
          }).bind(this))
        }
      </div>
    )
  }
}

