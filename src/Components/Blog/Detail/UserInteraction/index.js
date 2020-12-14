import React from 'react';

import Comments from './Comments';

import useCommentsAndVotesForBlog from '../../../../hooks/useCommentsAndVotesForBlog';


import './index.css';


// Voting and comments for posts
const UserInteraction = props => {
  const { pathname } = props;

  const { comments, 
    votes, 
    
    name,
    updateName,
    comment,
    updateComment } = useCommentsAndVotesForBlog(pathname);

  return (
    <div id="UserInteraction">
      
      <Comments comments={comments} 
        name={name}
        updateName={updateName}
        comment={comment}
        updateComment={updateComment}
      />
    </div>
  );
};

export default UserInteraction;