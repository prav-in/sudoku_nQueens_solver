import React from 'react'
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Info from './Info';


const NQueens = () => {

const [info,setInfo] = useState(false);

  return (
   <>
  <Header info={info} setInfo={setInfo}/>
  {info?<Info/>:<Main/>}
  </>
  )
}

export default NQueens