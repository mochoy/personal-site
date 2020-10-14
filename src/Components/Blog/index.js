import React, { useContext } from 'react';

import { ReactGACtx } from '../App';

import './index.css';


const Blog = props => {
  
  const ReactGA = useContext(ReactGACtx);

  return (
    <div id="Blog">
      Blog
    </div>
  );
};

export default Blog;