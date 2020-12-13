import { useState, useEffect, useContext } from 'react';

import { FirebaseCtx } from '../Components/App';


// What to set in db for a new post that wasn't already in db. Includes arr/obj
// for comments and votes
const defaultDbPostEntry = { 
  comments: { 0: {
    time: Date.now(),
    username: "init",
    text: "init"
  }}, 
  voteEvents: { 0: { 
    time: Date.now(),
    vote: "init"
  }},
  votes: 0
};

/**
 * Hook to handle all logic for dealing with comments and voting for blog posts.
 * 
 * Items are returned in an object and must be destructured
 * 
 * @param {String} pathname: Path in db to the data that corresponds to this post 
 * 
 * @return {Array} 
 */
 const useCommentsAndVotesForBlog = (pathname) => {
  const [ comments, setComments ] = useState([]);
  const [ votes, setVotes ] = useState([]);

  const db = useContext(FirebaseCtx).ref(pathname);


  // Fetch comments and votes from db if they exist, otherwise create them
  useEffect(() => {
    db.on('value', snapshot => {
      const dbContents = snapshot.val();
  
      // If no contents, means no votes/comments data for this post yet, create a
      // new obj in db to store votes and posts
      if (dbContents === null) {
        db.set(defaultDbPostEntry);
      } else {
        setComments(dbContents.comments);
        setVotes(dbContents.votes);
      }
  
    });
  
  // Can't include db in dependancy arr, that will re-render at every time db 
  // changes, which will cause infinte loop

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    comments,
    votes
  }
 };

 export default useCommentsAndVotesForBlog;