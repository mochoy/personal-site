import React, { Component } from 'react';

import './index.css';

export default class FilterSelect extends Component {
  constructor (props) {
    super(props);


  }

  render() {
    return (
      <div className="FilterSelect flex-container-center">
        {this.renderSelectableFilterCategories(this.props.filterCategories.categories)}
        {this.renderSelectableFilterCategories(this.props.filterCategories.languages)}
        {this.renderSelectableFilterCategories(this.props.filterCategories.technologies)}
      </div>
    );
  }

  renderSelectableFilterCategories(filterCategory) {
    return (
      <div className="selectable-filter-category-container">
      
        {//render all items
          filterCategory.map((item) => {
            return (
              <p>{item}</p>
            )
          })
        }
      </div>
    )
  }
}

