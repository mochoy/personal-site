import React, { useContext } from 'react';

import Nav from '../Nav';

import { ReactGACtx } from '../App';

import './index.css';


const Blog = props => {
  const { children } = props;
  
  const ReactGA = useContext(ReactGACtx);

  return (
    <div id="Blog">
      Wow quit hacking my site

      { children }
    </div>
  );
};

export default Blog;