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
import { init } from '../../services/firebase';

import './index.css';
import './blog-content.css';


const Blog = props => {  
  // const ReactGA = useContext(ReactGACtx);

  const [ posts, isLoading ] = useBlogPosts();

  const db = init("blog/first_post");
  db.on('value', snapshot => {
    console.log(snapshot.val())
  });

  return (
    <div id="Blog">
      
      <Cover/>

      <Loading isLoading={isLoading}/>

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
  );
};

export default Blog;