import React, { 
  // useContext 
  useEffect
} from 'react';

import ReactMarkdown from 'react-markdown'

// import { ReactGACtx } from '../App';

import posts from '../../assets/blog';

import './index.css';


const Blog = props => {  
  // const ReactGA = useContext(ReactGACtx);

  console.log(posts)

  useEffect(() => {
    console.log(posts)
  }, [posts]);

  return (
    <div id="Blog">      
      <h1 className="text-center">Posts</h1>

      { posts.map((post, i) => {
        return (
          <div key={i}>
            {post.date}
          </div>
        )
      })

      }
    </div>
  );
};

export default Blog;