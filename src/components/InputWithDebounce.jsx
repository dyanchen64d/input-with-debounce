import { useCallback, useState } from 'react';

const InputWithDebounce = () => {
  const [value, setValue] = useState('');

  const debounce = (func, delay = 1000) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debounceHandler = useCallback(
    debounce((value) => setValue(value)),
    []
  );

  const handler = (e) => {
    debounceHandler(e.target.value);
  };

  return (
    <>
      <label htmlFor="with-debounce">Input with debounce</label>
      <input type="text" name="with-debounce" onChange={handler} />
      <div>{value}</div>
    </>
  );
};

export default InputWithDebounce;
