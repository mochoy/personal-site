import { useState, useEffect } from 'react';

/**
 * Hook that listens and returns window scroll position
 * 
 * @return {number} scrollPosition
 */
const useScrollPosition = () => {
  const [ scrollPosition, setScrollPosition ] = useState(0);
  
  useEffect(() => {
    // Save scroll position on scroll event
    const onScroll = e => {
      setScrollPosition(e.target.documentElement.scrollTop);
    };
    
    window.addEventListener("scroll", onScroll);

    // Remove listener on unmount
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition]);

  return scrollPosition;
}

export default useScrollPosition;