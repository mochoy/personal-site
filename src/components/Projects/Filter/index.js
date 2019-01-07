import React, { Component } from 'react';

import './index.css';

export default class Filter extends Component {
  constructor (props) {
    super(props);


  }

  render() {
    console.log(this.props.filterCategories)
    return (
      <div className="Filter">
        Filter
      </div>
    );
  }
}

