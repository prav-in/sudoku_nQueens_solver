import NQueens from './components/NQueens/NQueens';
import SudokuSolver from './components/SudokuSolver/SudokuSolver';
import { useState } from 'react';
import './App.css';

function App() {

const homePage = (
  <>
  <div className='btn-container'>
  <button className='btn' onClick={()=>setApp(1)}>Sudoku</button>
  <button className='btn' onClick={()=>setApp(2)}>N-Queens</button>
  </div>
 </>
);

  const [app,setApp] = useState(0);

  return app===0 ? homePage :
     app===1 ?  <SudokuSolver setApp={setApp}/> : <NQueens setApp={setApp}/>
  ;
}

export default App;
