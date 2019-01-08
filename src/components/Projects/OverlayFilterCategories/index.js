import React, { Component } from 'react';

import './index.css';

export default class OverlayFilterCategories extends Component {
  constructor (props) {
    super(props);


  }

  render() {
    let categoryTitles = ["Category", "Languages", "Technologies"];
    return (
      <div className="OverlayFilterCategories project-filter-categories">
        {
          //map entire filterCategories arr
          this.props.filterCategories.map((category, i) => {
            return (
              <div className="project-filter-categories">
                <p className="overlay-description">{categoryTitles[i]}</p>
                {
                  //map sub filter categories
                  category.map((subcategoryText) => {
                    return <li className="overlay-description">{subcategoryText}</li>
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

