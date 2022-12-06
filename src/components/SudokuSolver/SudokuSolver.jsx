import React from 'react'
import Header from './header';
import Footer from "./footer";
import Main from './Main';

const SudokuSolver = ({setApp}) => {
  return (
    <>
      <Header setApp={setApp}/>
      <Main/>
      <Footer/>
   </>
  )
}

export default SudokuSolver