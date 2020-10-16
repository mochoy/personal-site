import React, { useContext } from 'react';

import { ReactGACtx } from '../App';


const Blog = props => {
  
  const ReactGA = useContext(ReactGACtx);

  return (
    <div id="Main">
      Main
    </div>
  );
};

export default Blog;