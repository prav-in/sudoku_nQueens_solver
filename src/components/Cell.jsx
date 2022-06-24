import React from 'react'
import './css/Cell.css'
import {GiQueenCrown} from 'react-icons/gi'

const Cell = ({i,j,c}) => {
  return (
    <div style={{background: (i+j)%2===0?'white':'black', color: (i+j)%2===1?'white':'black'}} className='cell'>
      {c && <h1 className='queen-cell'><GiQueenCrown/></h1>}
    </div>
  )
}

export default Cell