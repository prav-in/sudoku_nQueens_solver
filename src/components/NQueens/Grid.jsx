import React from 'react'
import Cell from './Cell';
import styles from './css/Grid.module.css'
import buttonStyles from './css/Main.module.css'

const Grid = ({n,handlePrev,handleNext,data}) => {

  let size = n>10?(n*25):(n*50);
  let cs = n>10?25:50;

    return (
    <>
    <div className={styles.gridContainer}>
    <button className={buttonStyles.btn} onClick={handlePrev}>PREV</button> 
    <div style={{height:size+'px',
                 width:size+'px', 
                gridTemplate: 'repeat('+n+', '+cs+'px) / repeat('+n+', '+cs+'px)'
                }} className={styles.grid}>
    {data.map((r,i)=>{return r.map((c,j)=><Cell i={i} j={j} c={c} cs={cs} />)})}
    </div>
    <button className={buttonStyles.btn} onClick={handleNext}>NEXT</button>
    </div>
    </>
  )
}

export default Grid