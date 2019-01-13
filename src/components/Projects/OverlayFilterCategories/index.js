import React, { Component } from 'react';

import './index.css';

export default class OverlayFilterCategories extends Component {
  constructor (props) {
    super(props);


  }

  render() {
    return (
      <div className="OverlayFilterCategories flex-container-left">
        {
          //map entire filterCategories arr
          this.props.filterCategories.map((category, i) => {
            //don't render anything if subcategory is empty
            if (category.length) {
              return (
                <div className="overlay-filter-container">
                  <p className="overlay-description overlay-filter-title">{this.props.filterCategoryTitles[i]}</p>
                  {
                    //map sub filter categories
                    category.sort().map((subcategoryText) => {
                      return <li className="overlay-description overlay-filter-li">{subcategoryText}</li>
                    })
                  }
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}

