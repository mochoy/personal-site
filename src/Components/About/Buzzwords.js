import React from 'react';

import StarRatings from 'react-star-ratings';


const Buzzwords = props => {
  const { hweBuzzwords, sweBuzzwords } = props;

  const generateBuzzword = (buzzword, index) => {
    const { name, rating } = buzzword;

    return (
      <div className="flex-container-vertically-center" 
        key={index}
      >
        <p className="text">{name}</p>

        <StarRatings
          rating={rating}
          numberOfStars={5}

          starRatedColor="#61dafb"
          starDimension="20px"
          starSpacing=""
        />
      </div>
    )
  }

  return (
    <div id="Buzzwords">
      <div className="text-center">
        <h2 className="display-inline">
          Skills
        </h2>
        <p className="display-inline" style={{ marginLeft: "0.5em" }}>
          (and meaningless quantifications)
        </p>
      </div>
      

      <div className="flex-container-horizontally-center">
          {/* Column 1 - HWE */}
          <div className="column">
            <h3 className="text-center">Hardware Engineering</h3>
            {hweBuzzwords.map(generateBuzzword)}
          </div>

          {/* Column 2 - SWE */}
          <div className="column">
            <h3 className="text-center">Software Engineering</h3>
            {sweBuzzwords.map(generateBuzzword)}
          </div>
          
        </div>
    </div>
  )
};

export default Buzzwords;