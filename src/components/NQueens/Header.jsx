import React from 'react'
import './css/Header.css'
import {AiFillInfoCircle,AiFillCloseCircle} from 'react-icons/ai'

const Header = ({info,setInfo}) => {

const handleInfo = ()=>{
  setInfo(prev=>!prev);
}

  return (
    <header className='header'>n-<span className='mark'>Queens</span>
     {info?<AiFillCloseCircle onClick={handleInfo} className='header-icon close-icon'/>:
     <AiFillInfoCircle onClick={handleInfo} className='header-icon info-icon'/>}
    </header>
  )
}

export default Header