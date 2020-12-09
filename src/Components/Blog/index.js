import React, { 
  // useContext 
} from 'react';
import ReactMarkdown from 'react-markdown'

// import { ReactGACtx } from '../App';

import useBlogPosts from '../../hooks/useBlogPosts';

import './index.css';


const Blog = props => {  
  // const ReactGA = useContext(ReactGACtx);

  const posts = useBlogPosts();

  return (
    <div id="Blog">      
      <h1 className="text-center">Posts</h1>

      { posts.map((post, i) => {
        const { title, date, md } = post

        return (
          <div key={i}>
            {title}
            {date}
            <ReactMarkdown source={md} />
          </div>
        )
      })

      }
    </div>
  );
};

export default Blog;