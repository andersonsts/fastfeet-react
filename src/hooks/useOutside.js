import { useEffect } from 'react';

function useOutside(ref) {
  useEffect(() => {
    const closeActions = true;
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        return closeActions;
      }
      return !closeActions;
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default useOutside;

// export default function Outside({ children, ...rest }) {
//   const wrapperRef = useRef(null);
//   const closeActions = useOutside(wrapperRef);

//   return (
//     <div ref={wrapperRef} closeActions={closeActions}>
//       {children}
//     </div>
//   );
// }
