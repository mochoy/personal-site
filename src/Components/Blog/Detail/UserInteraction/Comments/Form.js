import React from 'react';
import { Button } from '@material-ui/core';

const Form = props => {
  const { name, updateName, comment, updateComment, onCommentSubmit } = props;

  return (
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
  );
};

export default Form;