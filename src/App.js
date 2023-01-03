import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
function App() {
  return (
    <>
    <div className='px-2'>
      <button className="bg-indigo-500" >button</button>
      <Button />
      <Input />

    </div>
    </>

  );
}

export default App;
