import React from 'react';

import useWindowSize from '../../../hooks/useWindowSize';

import './index.css';

const Cover = props => {
  const { height } = useWindowSize();

  return (
    <div className="cover" style={{ height: height*0.4 + "px" }}>
      <div className="bg-img"
        style={{
          backgroundImage: `url(${require('assets/images/background/blog.jpg')})`
        }}
      >
        <h1 className="text-center cover-title">Posts</h1>
      </div>
    </div>
  )
};

export default Cover;