import React, { 
  // useContext 
} from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

// import { ReactGACtx } from '../App';

import useWindowSize from '../../hooks/useWindowSize';
import useBlogPosts from '../../hooks/useBlogPosts';

import './index.css';
import './blog-content.css';


const Blog = props => {  
  // const ReactGA = useContext(ReactGACtx);

  const { height } = useWindowSize();
  const posts = useBlogPosts();

  return (
    <div id="Blog">
      <div className="cover" style={{ height: height*0.4 + "px" }}>
        <div className="bg-img"
          style={{
            backgroundImage: `url(${require('assets/images/background/blog.jpg')})`
          }}
        >
          <h1 className="text-center cover-title">Posts</h1>
        </div>
      </div>
      


      { posts.map((post, i) => {
        const { title, url, date, previewMd } = post;

        return (
          <div key={i} className="post-preview blog-content">
            <Link className="title" to={url}>
              <h2>{title}</h2>
            </Link>
            <p className="date">{date}</p>
            <ReactMarkdown className="preview-md" source={previewMd}/>
            <Link to={url} className="read-more-link">Read More</Link>
          </div>
        )
      })

      }
    </div>
  );
};

export default Blog;