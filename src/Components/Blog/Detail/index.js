import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import Loading from '../../Functional/Loading';
import DateInfo from '../DateInfo';
import Comments from './Comments';

import useBlogPosts from '../../../hooks/useBlogPosts';
import useCommentsAndVotesForBlog from '../../../hooks/useCommentsAndVotesForBlog';

import './index.css';


const BlogDetail = memo(
  props => {
    // Get post based on url: /blog/{post to get}
    const [ post, isBlogPostLoading ] = useBlogPosts({ 
      searchUrl: props.match.params.id
    });

    const { comments, 
      votes, 
      
      name,
      updateName,
      comment,
      updateComment } = useCommentsAndVotesForBlog(
      props.location.pathname
    );


    // console.log("Comments: ", comments)
    // console.log("votes: ", votes)

    console.log("rendering")

    
    // Blog post is loading
    if (isBlogPostLoading) {
      return <div id="BlogDetail"><Loading/></div>

    // No post found, so invalid link, reroute to 404
    } else if (post.length === 0) {
      return <Redirect to='/404' />
    
    // Render actual post
    } else {  
      const { title, md, filePath } = post[0];
    
      // Md renderers
      const renderers = {
        // Render for img, make sure get correct path to image via require()
        image: ({src, alt}) => {
          return <img src={require(`assets/blog/${filePath}/${src}`)} alt={alt} />
        }
      };

      return (
        <div id="BlogDetail" className="blog-content">
          <h1 id="title">{title}</h1>
          <DateInfo post={post[0]} />
          <ReactMarkdown className="md" renderers={renderers} source={md}/>

          <Comments comments={comments} 
            name={name}
            updateName={updateName}
            comment={comment}
            updateComment={updateComment}
          />
        </div>
      )
    }
  },
  // Determine whether or not to re-render based on props only
  // To re-render, return false
  (prevProps, nextProps) => {
    const prevName = prevProps.name;
    const prevComment = prevProps.comment;

    const nextName = nextProps.name;
    const nextComment = nextProps.comment;

    // If comments or name is the same, don't re-render/return true, else false
    if (prevName === nextName || prevComment === nextComment) {
      return true
    }

    return false
  }

);

export default BlogDetail;