import { useRef } from 'react';

const useDebounce = (func, delay = 1000) => {
  const timer = useRef(undefined);

  return (...args) => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default useDebounce;
