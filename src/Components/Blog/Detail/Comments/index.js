import React from 'react';

import './index.css';


const Comments = props => {
  const { comments, username, updateUsername, comment, updateComment } = props;

  return (
    <div id="Comment">
      <h3>Comments</h3>
      { comments.length <= 1 &&
        <p>There are no comments.</p>
      }

      <textarea 
        className=""
        placeHolder={"username"}
        value={username}
        onChange={(e) => updateUsername(e.target.value)}
        required
      />
    </div>
  );
};

export default Comments;