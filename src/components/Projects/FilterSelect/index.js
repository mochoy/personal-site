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
      <div className="FilterSelect flex-container-center">
        {this.renderSelectableFilterCategories(this.props.filterCategories.categories, "Categories")}
        {this.renderSelectableFilterCategories(this.props.filterCategories.languages, "Languages")}
        {this.renderSelectableFilterCategories(this.props.filterCategories.technologies, "Technologies")}
      </div>
    );
  }

  renderSelectableFilterCategories(filterCategory, title) {
    return (
      <div className="selectable-filter-category-container">
        <h3>{title}</h3>
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

