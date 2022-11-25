import React from 'react'
import './css/Cell.css'
import {GiQueenCrown} from 'react-icons/gi'

const Cell = ({i,j,c,cs}) => {
  return (
    <div style={{background: (i+j)%2===0?'white':'black',
                 height:cs,
                 width:cs}} className='cell'>
      {c &&  <GiQueenCrown style={{
                    height:'70%',
                    width:'70%'}} 
                 className='queen-icon'/>}
    </div>
  )
}

export default Cell