import React from 'react'
import Input from './Input';
import Grid from './Grid';
import { useState} from 'react';
import './css/Main.css'

let ind =0

const Main = () => {

  const getBoard = (n)=>{
    let board = new Array(n);
      for(let i=0;i<n;i++){   
      board[i]= new Array(n);
      for(let j=0;j<n;j++)
      board[i][j] = false;
    }
    return board;
  }

    let a =[];
  // hooks
  const [n,setN] = useState(4)
  const [data,setData] = useState(getBoard(n));
  const [arr,setArr] = useState([]);
 

//functions

const handleClear = ()=>{
setData(getBoard(n));
setArr([]); 
ind=0;
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
if(data.length===2 || data.length===3){
alert("Not Possible!!")
return
}

placeQ(getBoard(n),0);
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
    <main className='main'> 
         <Input  setN={setN} setData={setData} getBoard={getBoard}/>
         <div className='grid-btn'>
         <Grid n={n} handleNext={handleNext} handlePrev={handlePrev} data={data}/>
         <div className='button-container'>
         <button className='btn' onClick={handleClear}>Clear</button>
         <button className='btn' onClick={handleSolve}>Place</button>
         </div>
         </div> 
    </main>
  ) 
}

export default Main