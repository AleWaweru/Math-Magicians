import React from 'react';
import './Calculator.css';
import CalcFun from './childCalc';
import Quotes from './quote';

function Calculator() {
  return (
    <>
      <CalcFun />
      <Quotes />
    </>
  );
}

export default Calculator;
