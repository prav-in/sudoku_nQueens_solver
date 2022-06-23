import React, { useState } from 'react'
import Cell from './Cell';
import './css/Grid.css'

const Grid = ({n}) => {
  
    let size = (n*100);

    let board = new Array(n);

    for(let i=0;i<n;i++){
    board[i]= new Array(n);
    for(let j=0;j<n;j++)
    board[i][j] = false;
  }
    
// hooks
     const [data,setData] = useState(board);

 //functions

 const handleSolve = ()=>{
  
  
 }

    return (
      <>
      <button>Clear</button>
      <button onClick={handleSolve}>Place</button>
    <div onClick={()=>console.log(board)} style={{height:size+'px',width:size+'px', gridTemplate: 'repeat('+n+', 100px) / repeat('+n+', 100px)' }} className='grid'>
{
board.map((r,i)=>{return r.map((c,j)=><Cell i={i} j={j}/>)})
}
    </div>
    </>
  )
}

export default Grid