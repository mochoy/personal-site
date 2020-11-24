import { useState, useLayoutEffect } from 'react';

/**
 * Hook that listens and returns window innerSize
 * 
 * @return {Object} with props height and width
 */
const useWindowSize = () => {
  const [ size, setSize ] = useState({
    height: 0,
    width: 0
  })

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}

export default useWindowSize;