import React from 'react';
import ReactMarkdown from 'react-markdown';
import { BeatLoader } from "react-spinners";

import useBlogPosts from '../../../hooks/useBlogPosts';

import './index.css';


const BlogDetail = props => {
  // Get post based on url: /blog/{post to get}
  const [ post, isLoading ] = useBlogPosts({ 
    searchUrl: props.match.params.id
  });

  if (!isLoading) {
    var { title, date, md, detailUrl } = post[0];
  }

  // Md renderers
  const renderers = {
    // Render for img, make sure get correct path to image via require()
    image: ({src, alt}) => {
      return <img src={require(`assets/blog/${detailUrl}/${src}`)} alt={alt} />
    }
  };

  if (isLoading) {
    return (
      <div id="BlogDetail">
        <div className="flex-container-horizontally-center">
          <BeatLoader loading={isLoading}/>
        </div>
        <p className="text-center">Loading...</p>
      </div>
    )
  } else {
    return (
      <div id="BlogDetail" className="blog-content">
        <h1 className="text-center" id="title">{title}</h1>
        <p className="text-center" id="date">{date}</p>
        <ReactMarkdown className="md" renderers={renderers} source={md}/>
      </div>
    )
  }
};

export default BlogDetail;