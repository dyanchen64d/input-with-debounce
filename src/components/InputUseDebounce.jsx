import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const InputUseDebounce = () => {
  const [value, setValue] = useState('');

  const debounceHandler = useDebounce((value) => setValue(value));

  const handler = (e) => {
    debounceHandler(e.target.value);
  };

  return (
    <>
      <label htmlFor="use-debounce">Input without debounce</label>
      <input type="text" name="use-debounce" onChange={handler} />
      <div>{value}</div>
    </>
  );
};

export default InputUseDebounce;
