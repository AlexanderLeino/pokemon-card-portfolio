import './App.css';
import { Button } from './components/Button/index.tsx';
import { Input } from './components/Input/index.tsx';
import { Spinner } from './components/Spinner';
import {Playground} from './playground.tsx'
import {CreateAccount} from './components/Form/AccountCreation/createAccount.tsx'
import "../../node_modules/nes.css/css/nes.css"
function App() {
  return (
    <>
      <CreateAccount />
    </>

  );
}

export default App;
