import React, { useState } from 'react'
import './css/Input.css'

const Input = ({setN}) => {
  
    // hooks

    const [data,setData] = useState(4);
  
    return (
    <form className='input-div' onSubmit={(e)=>{e.preventDefault(); setN(data)}}>
<h2>Enter A Number</h2>
<input type='number' value={data} onChange={(e)=>setData(e.target.value)}/>
 </form>
  )
}

export default Input