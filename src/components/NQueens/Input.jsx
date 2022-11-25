import React, { useState } from 'react'
import './css/Input.css'

const Input = ({setN,setData,getBoard}) => {
  
//hooks
const [num,setNum] = useState(4);

    return (
    <form className='input-div' onSubmit={(e)=>{e.preventDefault(); setN(num); setData(getBoard(num)) }}>
<h2>Board Size : </h2>
<input className='input' type='number' value={num} onChange={(e)=>{setNum(e.target.value)}}/>

 </form>
  ) 
}

export default Input