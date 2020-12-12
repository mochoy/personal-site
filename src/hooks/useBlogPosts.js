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
          // Remove isPreview posts if a searchURL is specified. I still want to 
          // show posts preview for posts that are in preview mode, but I don't 
          // want the entire post to be available on its own page and everything
          .filter(post => !!searchUrl ? !post.isPreview : true)
          // Apply any sort of data cleaning on remaining posts that didn't get 
          // filtered out
          .map(async (post) => {
            const postText = await (await fetch(post.postFile)).text();
            const previewMd = generatePreviewMd(postText);
            
            // Final object to represent the post and its corresponding metadata
            return {
              ...post,
              detailUrl: post.url,
              url: "/blog/" + post.url,
              md: postText,
              previewMd: previewMd
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


// Create post preview, which should be the first paragraph of the post, but if
// that first paragraph has too many wprds, more than
// maxNumOfWordsInBlogPostPrev, then truncate all words after the max and append 
// a '...'
//
// Pass in post txt, returns preview markdown 
const generatePreviewMd = postText => {
  let previewMd = postText.split('\n')[0];    // Get first paragraph

  let previewWords = previewMd.split(" ");
  if (previewWords.length > maxNumOfWordsInBlogPostPrev) {
    previewMd = previewWords
      .slice(0, maxNumOfWordsInBlogPostPrev)
      .join(" ") + "...";
  }

  return previewMd;
}

export default useBlogPosts;