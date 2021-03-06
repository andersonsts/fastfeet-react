import { useEffect, useState } from 'react';

function useClickOut(ref, visible) {
  const [contentVisible, setContentVisible] = useState(visible);

  function handleClick(e) {
    if (ref.current && ref.current.contains(e.target)) {
      setContentVisible(true);
    } else {
      setContentVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return contentVisible;
}

export default useClickOut;
