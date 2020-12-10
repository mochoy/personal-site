import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useIsOnBlogPath from './useIsOnBlogPath';

/**
 * Hook that listens to changes in path, returns true if on a blog detail path,
 * else false
 * Ex: /blog: false, /blog/first_post: true
 * 
 * @return {bool} isOnBlogPath
 */
const useIsOnBlogDetailPath = () => {
  const { pathname } = useLocation();
  const [ isOnBlogDetailPath, setIsOnBlogDetailPath ] = useState(true);

  const isOnBlogPath = useIsOnBlogPath();


  useEffect(() => {
    // If not on a blog path, then can't be on a blog detail path
    if (!isOnBlogPath) {
      setIsOnBlogDetailPath(false);
    // Check if path is detail by removing "blog" from the path and if the path
    // is more than 1 chars (to account for '/' or anything), then that means
    // we're on a blog detail path
    } else {
      setIsOnBlogDetailPath(
        1 < pathname.toLowerCase().replace("blog", "").length
      );
    }

  }, [pathname, isOnBlogPath]);

  return isOnBlogDetailPath;
}

export default useIsOnBlogDetailPath;