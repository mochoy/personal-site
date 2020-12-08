import React, { 
  // useContext 
} from 'react';

// import { ReactGACtx } from '../App';

import first_post from '../../assets/blog/first_post';

import './index.css';


const Blog = props => {  
  // const ReactGA = useContext(ReactGACtx);

  console.log(first_post)

  return (
    <div id="Blog">      
      <h1 className="text-center">Posts</h1>

    </div>
  );
};

export default Blog;