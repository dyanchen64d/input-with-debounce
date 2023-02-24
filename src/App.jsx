import './App.css';

import Input from './components/Input';
import InputWithDebounce from './components/InputWithDebounce';
import InputUseDebounce from './components/InputUseDebounce';

function App() {
  return (
    <div className="App">
      <Input />
      <InputWithDebounce />
      <InputUseDebounce />
    </div>
  );
}

export default App;
