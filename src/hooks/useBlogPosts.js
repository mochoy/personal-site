import { useState, useEffect } from 'react';

import posts from '../assets/blog';

/**
 * Hook to handle all logic for dealing with blogs.
 * 
 * @return {Array} posts: blog posts retrieved based on input parameters
 */
const useBlogPosts = () => {
  const [ postsState, setPostsState ] = useState([]);

  // Fetch posts, set to postsState
  useEffect(() => {
    (async function fetchAndSavePosts () {
      // Fetch posts and convert to text
      //
      // https://stackoverflow.com/questions/33438158/best-way-to-call-an-async-function-within-map
      const fetchedPosts = await Promise.all(posts.map(async (post) => {
        const postText = await (await fetch(post.postFile)).text();

        return {
          ...post,
          md: postText,
          previewMd: postText.split('\n')[0] // Preview is just first paragrpah
        }
      }));

      setPostsState(fetchedPosts);
    })();
    // https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174

  }, []);

  return postsState;
};

export default useBlogPosts;