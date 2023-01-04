import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Spinner } from './components/Spinner';
import "../../node_modules/nes.css/css/nes.css"
function App() {
  return (
    <>
    <div className='px-2'>
      <Button />
      <Input />
    </div>
    </>

  );
}

export default App;
