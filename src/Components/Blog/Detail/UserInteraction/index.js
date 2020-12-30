import React, { useContext } from 'react';

import Likes from './Likes';
import Comments from './Comments';

import useCommentsAndVotesForBlog from '../../../../hooks/useCommentsAndVotesForBlog';
import { ReactGACtx } from '../../../App';


import './index.css';


// Voting and comments for posts
const UserInteraction = props => {
  const { pathname } = props;

  const ReactGA = useContext(ReactGACtx);

  const { comments, 
    likes, 
    
    name,
    updateName,
    comment,
    updateComment,
    onCommentSubmit,
  
    likeStatus,
    onLikeEvent } = useCommentsAndVotesForBlog(pathname, ReactGA);


  return (
    <div id="UserInteraction">

      <Likes likes={likes} likeStatus={likeStatus} onLikeEvent={onLikeEvent}/>
      
      <Comments comments={comments} 
        name={name}
        updateName={updateName}
        comment={comment}
        updateComment={updateComment}
        onCommentSubmit={onCommentSubmit}
      />
    </div>
  );
};

export default UserInteraction;