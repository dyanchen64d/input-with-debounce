import { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');

  const handler = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <label htmlFor="no-debounce">Input without debounce</label>
      <input type="text" name="no-debounce" onChange={handler} />
      <div>{value}</div>
    </>
  );
};

export default Input;
