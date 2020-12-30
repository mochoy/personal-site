import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';

import Loading from '../../Functional/Loading';
import TableOfContents from './TableOfContents';
import DateInfo from '../DateInfo';
import AdjacentPosts from './AdjacentPosts';
import UserInteraction from './UserInteraction';

import useBlogPosts from '../../../hooks/useBlogPosts';
import useBlogPostViewAnalytics from '../../../hooks/useBlogPostViewAnalytics';
import useScrollToElementOnLoad from '../../../hooks/useScrollToElementOnLoad';
import renderers from './mdRenderers';

import { ReactGACtx } from '../../App';


import './index.css';


const BlogDetail = props => {
  // Get post based on url: /blog/{post to get}
  const [ post, 
    isBlogPostLoading, 
    prevPost,
    nextPost ] 
  = useBlogPosts({ 
    searchUrl: props.match.params.id
  });

  const ReactGA = useContext(ReactGACtx);

  useBlogPostViewAnalytics(post);
  useScrollToElementOnLoad();

  
  // Blog post is loading
  if (isBlogPostLoading) {
    return <div id="BlogDetail"><Loading/></div>

  // No post found, so invalid link, reroute to 404
  } else if (post.length === 0) {
    return <Redirect to='/404' />
  
  // Render actual post
  } else {  
    const { title, flattenedTableOfContents, md, filePath } = post[0];
  
    return (
      <div id="BlogDetail" className="blog-content">
        <Link to="/blog" 
          className="flex-container-vertically-center no-style-link text-hover-grey"
          onClick={() => {
            ReactGA.event({
              category: 'Blog Post',
              action: 'Click Link',
              label: `Back to Blog Previews`
            });
          }}
        >
          <ArrowBack/>
          <p style={{ marginLeft: "5px"}}>Back to posts</p>
        </Link>
          
        <AdjacentPosts prevPost={prevPost} nextPost={nextPost} />
        
        <h1 id="title">{title}</h1>
        <DateInfo post={post[0]}/>

        <TableOfContents tableOfContents={flattenedTableOfContents}/>
        
        <ReactMarkdown className="md" 
          renderers={renderers(filePath, ReactGA)} 
          source={md}
        />

        <AdjacentPosts prevPost={prevPost} nextPost={nextPost} />

        <UserInteraction pathname={props.location.pathname}/>
      </div>
    )
  }
};


export default BlogDetail;