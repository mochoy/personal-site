import React from 'react';

import './index.css';


const Comments = props => {
  const { comments, submitComment } = props;

  return (
    <div id="Comment">
      <h3>Comments</h3>
      { comments.length <= 1 &&
        <p>There are no comments.</p>
      }
    </div>
  );
};

export default Comments;