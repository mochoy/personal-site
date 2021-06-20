import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { FirebaseCtx } from '../Components/App';

import { isProd } from '../helpers/isDev';

/**
 * Hook that incrememnts view count for that specific post
 * 
 * @param {Array} post: array of one post object of the current post
 */
const useBlogPostViewAnalytics = post => {
  const { pathname } = useLocation();

  const db = useContext(FirebaseCtx).ref(pathname);

  // Increment views counter in GA, should increment if post changes
  useEffect(() => {
    // Make sure in prod there's actually a post and it's not just loading
    if (isProd() && !!post && post.length > 0) {
      // Increment views in db
      db.child('views').transaction(currentViews => currentViews + 1);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);
}

export default useBlogPostViewAnalytics;