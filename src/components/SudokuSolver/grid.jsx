import React from 'react'
import styles from './css/grid1.module.css'
import Cell from './cell'

const arr = new Array(9).fill(0);

const Grid = ({data,setData,isSafe}) => {
  return (
    <div className={styles.grid}>
      <div className={styles.backContainer}>
      {arr.map((a,index)=><div key={index} className={styles.backline}></div>)}
      </div>
     {data.map((r,i)=> {
     return r.map((c,j)=><Cell key={i*9+j} setData={setData} i={i} j={j} data={data} isSafe={isSafe}/>)})
    }
    </div>
  )
}

export default Grid