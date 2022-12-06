import React from 'react'
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Info from './Info';


const NQueens = ({setApp}) => {

const [info,setInfo] = useState(false);

  return (
   <>
  <Header info={info} setInfo={setInfo} setApp={setApp}/>
  {info?<Info/>:<Main/>}
  </>
  )
}

export default NQueens