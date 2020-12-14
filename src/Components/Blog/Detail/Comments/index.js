import React from 'react';

import './index.css';


const Comments = props => {
  const { comments, updateUsername, updateComment } = props;

  return (
    <div id="Comment">
      <h3>Comments</h3>
      { comments.length <= 1 &&
        <p>There are no comments.</p>
      }
      
      <form id="form">
        <h4>Submit a Comment</h4>

        <div>
          <label>Name</label>
          <input type="text" onBlur={e => updateUsername(e.target.value)}/>
        </div>
        
        <div>
          <label>Comment</label>
          <textarea rows="3"
            onBlur={e => updateComment(e.target.value)}
          />
        </div>

        
      </form>
    </div>
  );
};

export default Comments;