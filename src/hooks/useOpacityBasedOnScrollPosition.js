import { useState, useEffect } from 'react';

import useScrollPosition from './useScrollPosition';
import useWindowSize from './useWindowSize';

/**
 * Hook that listens to window scroll position and returns opacity based on that
 * As more scroll, increase opacity linearly until maxOpacity is reached
 * 
 * @param {number} maxOpacity: Max opacity, default set to 1 [0, 1]
 * 
 * @return {number} opacity
 */
const useOpacityBasedOnScrollPosition = ( maxOpacity = 1 ) => {
  const scrollPosition = useScrollPosition();
  const { height } = useWindowSize();

  const [ bgOpacity, setBgOpacity ] = useState(0);

  useEffect(() => {
    // If scroll too far, bg opacity just max
    if (scrollPosition/height > maxOpacity) {
      setBgOpacity(maxOpacity);
    // If not scroll too far, scale opacity based on how much scroll rel to height
    } else {
      setBgOpacity(scrollPosition/height);
    }
  }, [scrollPosition, height]);

  return bgOpacity;
}

export default useOpacityBasedOnScrollPosition;