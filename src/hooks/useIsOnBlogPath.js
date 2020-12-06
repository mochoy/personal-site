import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook that listens to changes in path, returns true if on a blog path, else 
 * false
 * 
 * @return {bool} isOnBlogPath
 */
const useIsOnBlogPath = () => {
  const { pathname } = useLocation();
  const [ isOnBlogPath, setIsOnBlogPath ] = useState(true);

  useEffect(() => {
    // Check blog path if 'blog' is in the path, this can also check for detail
    // paths like "blog/detail"
    setIsOnBlogPath(pathname.toLowerCase().includes("blog"))
  }, [pathname]);

  return isOnBlogPath;
}

export default useIsOnBlogPath;