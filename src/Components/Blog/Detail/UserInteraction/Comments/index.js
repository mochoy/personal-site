import React from 'react';

import Form from './Form';

const Comments = props => {
  const { comments } = props;

  return (
    <div id="Comment">
      <h3>Comments</h3>
      { comments.length <= 1 &&
        <p>There are no comments.</p>
      }
      
      <Form {...props}/>
    </div>
  );
}


export default Comments;