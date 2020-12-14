import { useState, useEffect, useContext } from 'react';

import { FirebaseCtx } from '../Components/App';


// What to set in db for a new post that wasn't already in db. Includes arr/obj
// for comments and votes
const defaultDbPostEntry = { 
  comments: { 0: {
    id: Date.now(),
    date: new Date().toString(),
    name: "init",
    text: "init"
  }}, 
  voteEvents: { 0: { 
    id: Date.now(),
    date: new Date().toString(),
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
 * @return {Array} comments
 * @return {Number} votes
 * 
 * @return {String} name
 * @return {Function} updateName
 * @return {String} comment
 * @return {Function} updateComment
 * @return {Function} onCommentSubmit
 */
 const useCommentsAndVotesForBlog = (pathname) => {
  // Vals from db
  const [ comments, setComments ] = useState([]);
  const [ votes, setVotes ] = useState([]);

  // User-entered vals
  const [ name, updateName ] = useState("");
  const [ comment, updateComment ] = useState("");

  const db = useContext(FirebaseCtx).ref(pathname);



  // Fetch comments and votes from db if they exist, otherwise create them
  useEffect(() => {
    // Function to do the grab/initial setting in db. This function needs to be
    // referenced twice, once as callback to subscribe to db, another as callback
    // to detach from db to prevent mem leak
    const getCommentsAndVotes = snapshot => {
      const dbContents = snapshot.val();
  
      // If no contents, means no votes/comments data for this post yet, create a
      // new obj in db to store votes and posts
      if (dbContents === null) {
        db.set(defaultDbPostEntry);
      } else {
        setComments(dbContents.comments);
        setVotes(dbContents.votes);
      }
    }

    db.on('value', getCommentsAndVotes);

    // Return detaching function that gets executed on cleanup to prevent mem leak
    return () => {
      db.off('value', getCommentsAndVotes);
    };
  
  // Can't include db in dependancy arr, that will re-render at every time db 
  // changes, which will cause infinte loop

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const onCommentSubmit = () => {
    // Push comment to db
    db.child('comments').push({
      id: Date.now(),
      time: new Date().toString(),
      name: name,
      text: comment
    });

    // Clear comment form
    updateName("");
    updateComment("");
  };


  return {
    // Vals from db
    comments,
    votes,

    // Vals for comment form
    name,
    updateName,
    comment,
    updateComment,
    onCommentSubmit
  }
 };

 export default useCommentsAndVotesForBlog;