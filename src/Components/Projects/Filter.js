import React from 'react';


const Filter = props => {
  return (
    <div id="Filter" className="flex-container-horizontally-center">
      <p id="first" className="mouse-on-hover">All</p>
      <p className="mouse-on-hover">Hardware</p>
      <p className="mouse-on-hover">Software</p>
    </div>
  )
};

export default Filter;