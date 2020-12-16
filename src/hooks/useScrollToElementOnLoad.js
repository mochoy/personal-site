import { useEffect } from 'react';
import scrollToElement from 'scroll-to-element';

import { scrollToOffset } from '../consts';

/**
 * Hook to scroll to element based on hash in url
 * 
 * @param {String} el: identifier of el to scroll to, typically html id. If it's 
 *  not defined, just scroll to element that matches hash
 */
export default function useScrollToElementOnLoad (el) {
  useEffect(() => {
    const target = !!el ? el : window.location.hash.replace();

    // Wait 1 sec to scroll to make sure everything is properly rendered to
    // ensure smooth scrolling all the way down to the component
    setTimeout(() => {
      // if pathname specified, scroll to it 
      if (target.length > 0) {
        scrollToElement(`${target}`, { offset: scrollToOffset })
      }
    }, 500)

  });
};