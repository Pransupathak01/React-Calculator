import React from 'react';
//import React, { useState } from 'react';
import './App.css';
import CalculatorPran from './components/CalculatorPran';
import Header from './components/header'; 
import Footer from './components/Footer';
import CalculatorBox from './components/CalculatorBox';

const App = () =>{
  return(
    <div>
      <Header/>
      <CalculatorPran/>
      <Footer/>
    </div>
  

  )
};
 
export default App;
