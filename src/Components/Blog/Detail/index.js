import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'

import useBlogPosts from '../../../hooks/useBlogPosts';

import './index.css';

const BlogDetail = props => {
  // Get post based on url: /blog/{post to get}
  const [ post, isLoading ] = useBlogPosts({ 
    searchUrl: props.match.params.id
  });

  console.log(isLoading)
  console.log(post)

  if (isLoading) {
    return (
      <div id="BlogDetail">
        Loading
      </div>
    )
  } else {
    return (
      <div id="BlogDetail">
        BlogDetail
      </div>
    )
  }
};

export default BlogDetail;