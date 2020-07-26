import React from 'react';


const Filter = props => {
  const { filter, setFilter, filterOptions } = props;

  return (
    <div id="Filter" className="flex-container-horizontally-center">
      { filterOptions.map((filterOption, index) => {
          const firstId = index === 0 ? "first" : "";
          const selectedClass = filter === filterOption ? "selected" : "";

          return (
            <p id={firstId}
              className={`mouse-on-hover ${selectedClass}`}
              key={index}
              onClick={() => setFilter(filterOption)}
            >
              {filterOption}
            </p>
          )
        })
      }
    </div>
  )
};

export default Filter;