import React from 'react';


import './index.css';


const Footer = props => {
  const { isVisible } = props;

  console.log("Footer is visible? " + isVisible)


  return (
    <div id="Footer">
      <p className="text-center">Monty Choy</p>
      <p className="text-center">2017 - 2020</p>
    </div>
  );
};

export default Footer;