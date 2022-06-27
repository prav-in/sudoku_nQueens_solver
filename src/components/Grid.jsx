import React from 'react'
import Cell from './Cell';
import './css/Grid.css'

const Grid = ({n,handlePrev,handleNext,data}) => {

  let size = (n*50);

    return (
    <>
    <div className='grid-container'>
    <button className='btn' onClick={handlePrev}>PREV</button> 
    <div style={{height:size+'px',
                 width:size+'px', 
                gridTemplate: 'repeat('+n+', 50px) / repeat('+n+', 50px)'
                }} className='grid'>
    {data.map((r,i)=>{return r.map((c,j)=><Cell i={i} j={j} c={c} />)})}
    </div>
    <button className='btn' onClick={handleNext}>NEXT</button>
    </div>
    </>
  )
}

export default Grid