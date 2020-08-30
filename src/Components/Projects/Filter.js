import React, { useContext } from 'react';

import { ReactGACtx } from '../App';



const Filter = props => {
  const { filter, setFilter, filterOptions } = props;

  const ReactGA = useContext(ReactGACtx);


  return (
    <div id="Filter" className="flex-container-horizontally-center">
      { filterOptions.map((filterOption, index) => {
          const firstId = index === 0 ? "first" : "";
          const selectedClass = filter === filterOption ? "selected" : "";

          return (
            <p id={firstId}
              className={`mouse-on-hover ${selectedClass}`}
              key={index}
              onClick={() => {
                ReactGA.event({
                  category: 'Filter',
                  action: 'Selected',
                  label: filterOption,
                });

                setFilter(filterOption)
              }}
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