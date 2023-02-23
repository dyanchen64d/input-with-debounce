import { useCallback, useState } from 'react';
import './InputWithDebounce.css';

const mockFetch = (str) => {
  const resList = [];

  for (let i = 0; i < 8; i++) {
    resList.push(`${str}__mock__${i}`);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ list: resList });
    }, 500);
  });
};

const InputWithDebounce = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);

  const fetchApi = async (value) => {
    console.log('fetchApi', value);

    setIsLoading(true);
    const res = await mockFetch(value);

    setIsLoading(false);
    setList(res.list);
  };

  const debounce = (func, delay = 1000) => {
    let timeoutId;

    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedFetchApi = useCallback(debounce(fetchApi), []);

  const changeHandler = (e) => {
    const { value } = e.target;
    // console.log('changeHandler..', value);

    debouncedFetchApi(value);
  };

  return (
    <div className="input-with-debounce">
      <div className={`input-wrapper ${isLoading ? 'is-loading' : ''}`}>
        <input type="text" onChange={changeHandler} />
      </div>
      {list.length > 0 && (
        <div>
          {list.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputWithDebounce;
