import React from 'react'
import styles from './css/Header.module.css'
import {AiFillInfoCircle,AiFillCloseCircle} from 'react-icons/ai'
import {IoMdArrowRoundBack} from 'react-icons/io';

const Header = ({info,setInfo,setApp}) => {

const handleInfo = ()=>{
  setInfo(prev=>!prev);
}

  return (
    <header className={styles.header}>n-<span className={styles.mark}>Queens</span>
      <IoMdArrowRoundBack className={styles.icon} onClick={()=>setApp(0)}/>
     {info?<AiFillCloseCircle onClick={handleInfo} className={styles.headerIcon+" "+styles.closeIcon}/>:
     <AiFillInfoCircle onClick={handleInfo} className={styles.headerIcon+" "+styles.infoIcon}/>}
    </header>
  )
}

export default Header