import { useState, useEffect } from 'react';

import posts from '../assets/blog';
import { maxNumOfWordsInBlogPostPrev } from '../consts';


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
        
        // Create post preview, which should be the first paragraph of the 
        // post, but if that first paragraph has too many wprds, more than
        // maxNumOfWordsInBlogPostPrev, then truncate all words after the max
        // and append a '...'
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
      }));

      setPostsState(fetchedPosts);
    })();
    // https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174

  }, []);

  return postsState;
};

export default useBlogPosts;