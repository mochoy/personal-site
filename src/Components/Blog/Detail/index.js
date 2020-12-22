import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import LinkIcon from '@material-ui/icons/Link'; 
import ReactMarkdown from 'react-markdown';

import Loading from '../../Functional/Loading';
import DateInfo from '../DateInfo';
import TableOfContents from './TableOfContents';
import UserInteraction from './UserInteraction';

import useBlogPosts from '../../../hooks/useBlogPosts';
import stringToUrl from '../../../helpers/stringToUrl';
import useScrollToElementOnLoad from '../../../hooks/useScrollToElementOnLoad';

import './index.css';


const BlogDetail = props => {
  // Get post based on url: /blog/{post to get}
  const [ post, isBlogPostLoading ] = useBlogPosts({ 
    searchUrl: props.match.params.id
  });

  useScrollToElementOnLoad();

  
  // Blog post is loading
  if (isBlogPostLoading) {
    return <div id="BlogDetail"><Loading/></div>

  // No post found, so invalid link, reroute to 404
  } else if (post.length === 0) {
    return <Redirect to='/404' />
  
  // Render actual post
  } else {  
    const { title, tableOfContents, md, filePath } = post[0];
  
    return (
      <div id="BlogDetail" className="blog-content">
        <p>Back to posts</p>

        <h1 id="title">{title}</h1>
        <DateInfo post={post[0]}/>

        <TableOfContents tableOfContents={tableOfContents}/>
        
        <ReactMarkdown className="md" renderers={renderers(filePath)} source={md}/>

        <UserInteraction pathname={props.location.pathname}/>
      </div>
    )
  }
};

// Md renderers
const renderers = (filePath) => {
  return {
    // Render for img, make sure get correct path to image via require()
    image: ({src, alt}) => {
      return <img src={require(`assets/blog/${filePath}/${src}`)} alt={alt} />
    },

    // Apply id's to headings so they can easily be scrolled to via links
    heading: ({ level, node }) => {
      // Get text and generate id based on url of text to correspond with ToC 
      // links
      const text = node.children[0].value;
      const id = stringToUrl(text);

      const generateHeaderJSX = () => {
        switch (level) {
          case 1: 
            return <h1 id={id}>{text}</h1>
          case 2: 
            return <h2 id={id}>{text}</h2>
          case 3: 
            return <h3 id={id}>{text}</h3>
          case 4: 
            return <h4 id={id}>{text}</h4>
          default: 
            return null;
        }
      }
      
      return (
        <Link to={`#${id}`} 
          className="flex-container-vertically-center heading-container"
        >
        {generateHeaderJSX()}
        <LinkIcon fontSize="small" className="heading-link-icon"/>
      </Link>
      );
    }
  };
}

export default BlogDetail;