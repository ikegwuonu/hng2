import { useState, useEffect } from 'react';

const useMediaQuery = (width) => {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsScreenSmall(window.innerWidth <= width);
    };

    window.addEventListener('resize', updateMedia);
    updateMedia();

    return () => window.removeEventListener('resize', updateMedia);
  }, [width]);

  return isScreenSmall;
};

export default useMediaQuery;
