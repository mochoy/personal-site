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
        <div className="flex-container-center">
          <button className="light-blue-btn round-btn"
            onClick={this.props.showAll.bind(this)}>
            <p className="link-btn-text-content link-btn-txt">Show All</p>
          </button>
          <button className="red-btn round-btn"
            onClick={this.props.hideAll.bind(this)}>
            <p className="link-btn-text-content link-btn-txt">Hide All</p>
          </button>
        </div>
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
    this.props.toggleFilterItem(i, n);
  }

}

