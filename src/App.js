import './App.css';
import Input from './components/Input';
import Grid from './components/Grid';
import { useState } from 'react';

function App() {

  // hooks
  const [n,setN] = useState(4);

  return (
    <>
  <Input setN={setN}/>
  <Grid n={n}/>
  </>
  );
}

export default App;
