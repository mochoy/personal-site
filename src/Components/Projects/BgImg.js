import React from 'react';


const BgImg = props => {
  const { imgSrc } = props;

  return (
    <div className="bg-img"
      style={{
        backgroundImage: 'url(' + require(`../../assets/images/projects/${imgSrc}`)
      }}
    />
  )
};

export default BgImg;