import React, { Component } from 'react';

import './index.css';

export default class FilterSelect extends Component {
  constructor (props) {
    super(props);

    this.state = {

    }
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
            let isSelected = this.props.filterCategories[i][n];
            return (
              <p className={isSelected ? "selected-filter-category-text filter-category-text" : "unselected-filter-category-text filter-category-text"}
                onClick={(() => {
                  //i is index of all filter categories
                  //n is index of item in the arr of its category
                  this.toggleFilterCategory(i, n);
                }).bind(this)}>
                {items}</p>
            )
          }).bind(this))
        }
      </div>
    )
  }

  //i is index of all filter categories
  //n is index of item in the arr of its category
  toggleFilterCategory(i, n) {
    console.log(this.props.filterCategories[i][n]);
  }

}

