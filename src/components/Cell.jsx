import React from 'react'
import './css/Cell.css'

const Cell = ({i,j}) => {
  return (
    <div style={{background: (i+j)%2===0?'white':'black'}} className='cell'></div>
  )
}

export default Cell