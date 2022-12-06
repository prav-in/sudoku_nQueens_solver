import React from 'react'
import styles from './css/Cell.module.css'
import {GiQueenCrown} from 'react-icons/gi'

const Cell = ({i,j,c,cs}) => {
  return (
    <div style={{background: (i+j)%2===0?'white':'black',
                 height:cs,
                 width:cs}} className={styles.cell}>
      {c &&  <GiQueenCrown style={{
                    height:'70%',
                    width:'70%'}} 
                 className={styles.queenIcon}/>}
    </div>
  )
}

export default Cell