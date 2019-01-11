import React, { Component } from 'react';

import './index.css';

export default class FilterSelect extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selectableFilterCategories: this.populateSelectableFilterCategories()
    }
  }

  populateSelectableFilterCategories() {
    return ({

    })
  }

  render() {
    return (
      <div className="FilterSelect flex-container-center">
        {this.renderSelectableFilterCategories()}
      </div>
    );
  }

  renderSelectableFilterCategories() {
    return (
      <div>
        {this.props.filterCategories.map(this.renderIndivSelectableFilterCategory)}
      </div>
    )
  }

  renderIndivSelectableFilterCategory(filterCategory, i) {
    let title = ["Category", "Languages", "Technologies"][i];

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

