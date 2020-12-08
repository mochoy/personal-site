import React, { 
  // useContext 
} from 'react';

// import { ReactGACtx } from '../App';

import posts from '../../assets/blog';

import './index.css';


const Blog = props => {  
  // const ReactGA = useContext(ReactGACtx);

  console.log(posts)

  return (
    <div id="Blog">      
      <h1 className="text-center">Posts</h1>

    </div>
  );
};

export default Blog;