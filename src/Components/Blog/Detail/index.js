import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown'

import useBlogPosts from '../../../hooks/useBlogPosts';

import './index.css';

const BlogDetail = props => {
  // Get post based on url: /blog/{post to get}
  const [ post, isLoading ] = useBlogPosts({ 
    searchUrl: props.match.params.id
  });

  if (!isLoading) {
    var { title, date, md } = post[0];
  }

  if (isLoading) {
    return (
      <div id="BlogDetail">
        Loading
      </div>
    )
  } else {
    return (
      <div id="BlogDetail">
        <h1 className="text-center title">{title}</h1>
        <p className="text-center date">{date}</p>
        <ReactMarkdown className="md" source={md}/>
      </div>
    )
  }
};

export default BlogDetail;