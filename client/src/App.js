import './App.css';
import { Button } from './components/Button/index.tsx';
import { Input } from './components/Input';
import { Spinner } from './components/Spinner';
import {Playground} from './playground.tsx'
import { Form } from './components/form/index.tsx'
import "../../node_modules/nes.css/css/nes.css"
function App() {
  return (
    <>
    <div className='px-2'>
      <Button />
      <Input />
      <Playground />
      <Form />
    </div>
    </>

  );
}

export default App;
