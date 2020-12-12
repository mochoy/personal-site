import React, { 
  // useContext 
} from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

import Loading from '../Functional/Loading';
import Cover from './Cover';

// import { ReactGACtx } from '../App';

import useBlogPosts from '../../hooks/useBlogPosts';

import './index.css';
import './blog-content.css';


const Blog = props => {  
  // const ReactGA = useContext(ReactGACtx);

  const [ posts, isLoading ] = useBlogPosts();

  return (
    <div id="Blog">
      
      <Cover/>

      <Loading isLoading={isLoading}/>

      { !isLoading && posts.map((post, i) => {
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