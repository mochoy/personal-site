import { useState, useEffect } from 'react';

import posts from '../assets/blog';
import { maxNumOfWordsInBlogPostPrev } from '../consts';


/**
 * Hook to handle all logic for dealing with blogs. Parameters should be passed
 * in as members in an object. Return vals are returned in arr, so destructuring
 * is required.
 * 
 * @param {String} searchUrl: Url of post to search for, returns matching posts 
 *    based off of post's url prop
 * 
 * @return {Array} posts: blog posts retrieved based on input parameters
 * @return {Boolean} isLoading: true if blog post(s) is being fetched, else false
 */
const useBlogPosts = params => {
  // If there are params specified, destructure them
  if (!!params) {
    // Use var so I have scope outside of the if statement
    var { searchUrl } = params;
  }

  const [ isLoading, setIsLoading ] = useState(true);
  const [ postsState, setPostsState ] = useState([]);

  // Fetch posts, set to postsState
  useEffect(() => {
    (async function fetchAndSavePosts () {
      setIsLoading(true);

      // Fetch posts and convert to text
      //
      // https://stackoverflow.com/questions/33438158/best-way-to-call-an-async-function-within-map
      const fetchedPosts = await Promise.all(
        posts
          // Get posts that match searchUrl if specified
          .filter(post => !!searchUrl ? post.url === searchUrl : true)
          .map(async (post) => {
            const postText = await (await fetch(post.postFile)).text();
            
            // Create post preview, which should be the first paragraph of the 
            // post, but if that first paragraph has too many wprds, more than
            // maxNumOfWordsInBlogPostPrev, then truncate all words after the 
            // max and append a '...'
            let previewMd = postText.split('\n')[0];    // Get first paragraph

            let previewWords = previewMd.split(" ");
            if (previewWords.length > maxNumOfWordsInBlogPostPrev) {
              previewMd = previewWords
                .slice(0, maxNumOfWordsInBlogPostPrev)
                .join(" ") + "...";
            }
            
            return {
              ...post,
              url: "/blog/" + post.url,
              md: postText,
              previewMd:  previewMd
            }
          })  // Map
      );  // Promise

      setPostsState(fetchedPosts);
      setIsLoading(false);
    })();
    // https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174

  }, [searchUrl]);

  return [postsState, isLoading];
};

export default useBlogPosts;