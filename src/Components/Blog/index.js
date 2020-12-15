import React, { 
  // useContext 
} from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

import Loading from '../Functional/Loading';
import Cover from './Cover';
import DateInfo from './DateInfo';

// import { ReactGACtx } from '../App';

import useBlogPosts from '../../hooks/useBlogPosts';

import './index.css';


const Blog = props => {  
  // const ReactGA = useContext(ReactGACtx);

  const [ posts, isLoading ] = useBlogPosts();

  return (
    <div id="Blog">
      
      <Cover/>

      <Loading isLoading={isLoading}/>

      <div id="post-previews">
        { !isLoading && posts.map((post, i) => {
          const { title, url, previewMd, isPreview} = post;

          // class for disabled link if post is preview, gets appended to classname
          const disabledLink = isPreview ? " disabled-link" : ""

          return (
            <div key={i} className="post-preview blog-content">
              <Link className={`title ${disabledLink}`} to={url}>
                <h2>{title}</h2>
              </Link>

              <DateInfo post={post}/>
              
              <ReactMarkdown className="preview-md" source={previewMd}/>

              <Link to={url} className={`read-more-link ${disabledLink}`}>
                {isPreview ? "Coming Soon!" : "Read More"}
              </Link>
            </div>
          )
        })

        }
      </div>
      
    </div>
  );
};

export default Blog;