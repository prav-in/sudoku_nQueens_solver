import React from 'react'
import styles from "./css/footer1.module.css"

const footer = () => {
  return (
    <footer className={styles.footer}>
<p className={styles.footerAbout}>Sudoku is a logic-based, combinatorial number-placement puzzle. This Web App is Created using React to Provide Solutions to your Sudoku Puzzles</p>
<div className={styles.footerLinks}>
    <a href='https://github.com/prav-in'>prav-in</a>  
    </div>
    </footer>
  )
}

export default footer