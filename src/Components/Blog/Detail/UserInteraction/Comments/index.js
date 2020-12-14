import React from 'react';
import { Button } from '@material-ui/core';


const Comments = props => {
  const { comments, name, updateName, comment, updateComment, onCommentSubmit } = props;

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
          <input type="text" value={name} 
            onChange={e => updateName(e.target.value)}
          />
        </div>
        
        <div>
          <label>Comment</label>
          <textarea rows="3" value={comment}
            onChange={e => updateComment(e.target.value)}
          />
        </div>

        <Button variant="contained" color="primary" disableElevation 
          disabled={!(name.length > 1 && comment.length > 1)} 
          onClick={onCommentSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}


export default Comments;