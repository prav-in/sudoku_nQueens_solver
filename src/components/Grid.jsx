import React, { useState,useEffect } from 'react'
import Cell from './Cell';
import './css/Grid.css'

let ind =0

const Grid = ({n}) => {

  let a =[];

    let size = (n*100);

    let board = new Array(n);
    for(let i=0;i<n;i++){
    board[i]= new Array(n);
    for(let j=0;j<n;j++)
    board[i][j] = false;
  }
    
// hooks
     const [data,setData] = useState(board);
     const [arr,setArr] = useState([]);

     useEffect(() => {
      setData(board)    
     }, [n])
     

 //functions

 const handleClear = ()=>{
  let bd = new Array(n);

  for(let i=0;i<n;i++){
  bd[i]= new Array(n);
  for(let j=0;j<n;j++)
  bd[i][j] = false;

  setData(bd);
  setArr([]); 
  ind=0;
  }
 }

 const handleNext = ()=>{
  if(ind<arr.length-1)
  setData(arr[++ind]);
 }

 const handlePrev = ()=>{
  if(ind>0)
  setData(arr[--ind]);
 }

 const handleSolve = ()=>{
  placeQ(board,0);
  setArr(a);
  setData(a[0]);
 }


 const placeQ=(grid,row)=>{
  
  if(row===grid.length){

    let dup = new Array(grid.length);

    for(let i=0;i<grid.length;i++)
    dup[i] = [...grid[i]];

    a.push(dup);
    return;
  }

  for(let col=0;col<grid.length;col++){

    if(isSafe(grid,row,col)){
      grid[row][col] = true;
      placeQ(grid,row+1);
      grid[row][col] = false;
    }
  } 
}

const isSafe =(grid,r,c)=>{

  for(let i=0;i<r;i++)
  if(grid[i][c])
    return false;

  let maxL = Math.min(r,c);

  for(let i=1;i<=maxL;i++)
  if(grid[r-i][c-i])
    return false;

  let maxR = Math.min(r,grid.length-c-1);

  for(let i=1;i<=maxR;i++)
  if(grid[r-i][c+i]) return false;
  
return true;
} 

    return (
      <>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleSolve}>Place</button>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    <div onClick={()=>console.log(board)} style={{height:size+'px',width:size+'px', gridTemplate: 'repeat('+n+', 100px) / repeat('+n+', 100px)' }} className='grid'>
{data.map((r,i)=>{return r.map((c,j)=><Cell i={i} j={j} c={c} />)})}
    </div>
    </>
  )
}

export default Grid