import React, { Component } from 'react';

import './index.css';

export default class OverlayFilterCategories extends Component {
  constructor (props) {
    super(props);


  }

  render() {
    let categoryTitles = ["Category", "Languages", "Technologies"];
    return (
      <div className="OverlayFilterCategories flex-container-left">
        {
          //map entire filterCategories arr
          this.props.filterCategories.map((category, i) => {
            return (
              <div className="overlay-filter-container">
                <p className="overlay-description overlay-filter-title">{categoryTitles[i]}</p>
                {
                  //map sub filter categories
                  category.map((subcategoryText) => {
                    return <li className="overlay-description overlay-filter-li">{subcategoryText}</li>
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

