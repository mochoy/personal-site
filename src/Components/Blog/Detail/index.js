import React from 'react';

import useBlogPosts from '../../../hooks/useBlogPosts';

import './index.css';

const BlogDetail = props => {
  // Get post based on url: /blog/{post to get}
  const post = useBlogPosts({ 
    searchUrl: props.match.params.id
  });

  console.log(post);

  return (
    <div id="BlogDetail">
      BlogDetail
    </div>
  )
};

export default BlogDetail;