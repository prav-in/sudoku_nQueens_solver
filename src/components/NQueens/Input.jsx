import React, { useState } from 'react'
import styles from  './css/Input.module.css'

const Input = ({setN,setData,getBoard}) => {
  
//hooks
const [num,setNum] = useState(4);

    return (
    <form className={styles.inputDiv} onSubmit={(e)=>{e.preventDefault(); setN(num); setData(getBoard(num)) }}>
<h2>Board Size : </h2>
<input className={styles.input} type='number' value={num} onChange={(e)=>{setNum(e.target.value)}}/>

 </form>
  ) 
}

export default Input