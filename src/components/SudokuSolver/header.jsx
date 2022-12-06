import React from 'react';
import  styles from'./css/header1.module.css';
import {IoMdArrowRoundBack} from 'react-icons/io';

const header = ({setApp}) => {
  return (
    <div>
     <header className={styles.head}>
        <IoMdArrowRoundBack className={styles.icon} onClick={()=>setApp(0)}  />
         <h1 className={styles.sudoku}>Sudoku Solver</h1>
         <h3 className={styles.about}>About</h3>
     </header>
    </div>
  )
}

export default header
