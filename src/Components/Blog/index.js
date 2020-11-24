import React, { useContext } from 'react';

import Nav from '../Nav';

import { ReactGACtx } from '../App';

import './index.css';


const Blog = props => {  
  const ReactGA = useContext(ReactGACtx);

  return (
    <div id="Blog">
      Wow quit hacking my site

    </div>
  );
};

export default Blog;