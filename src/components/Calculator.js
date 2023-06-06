import React from 'react';
import { FaDivide } from 'react-icons/fa';

import './Calculator.css';
import FirthRow from './calFirstRow';

const Calculator = () => (
  <div className="calculator-body">
    <div className="calc-result">
      <span>0</span>
    </div>
    <div className="assign-operators">
      <div className="first-row">
        <span>AC</span>
        <span>+/-</span>
        <span>%</span>
        <span className="special" id="division">
          <FaDivide />
        </span>
      </div>
      <div className="second-row">
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span className="special">x</span>
      </div>
      <div className="third-row">
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span className="special">-</span>
      </div>
      <div className="fourth-row">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span className="special">+</span>
      </div>
    </div>
    <FirthRow />
  </div>
);

export default Calculator;
