import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
  return (
    <div id="NotFound" style={{ paddingTop: "5em" }}>
      <p>Nothing here! I hope this page is ugly enough to communicate that.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
