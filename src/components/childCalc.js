import React, { useState } from 'react';
import calculate from '../logic/calculate';

function CalcFun() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (e) => {
    const res = calculate({ total, next, operation }, e.target.innerText);
    setTotal(res.total);
    setNext(res.next);
    setOperation(res.operation);
  };

  return (
    <>
      <div className="calculator-body">
        <div className="calc-result" data-testid="result">
          {total}
          {operation}
          {next}
        </div>
        <div className="assign-operators">
          <div className="first-row">
            <button
              onClick={handleClick}
              id="clearAll"
              type="button"
              className="keys"
            >
              AC
            </button>
            <button
              onClick={handleClick}
              id="backspace"
              type="button"
              className="keys"
            >
              +/-
            </button>
            <button name="%" onClick={handleClick} type="button" className="keys">
              %
            </button>
            <button
              name="/"
              onClick={handleClick}
              type="button"
              className="keys special"
              id="division"
            >
              &#247;
            </button>
          </div>
          <div className="second-row">
            <button name="7" onClick={handleClick} type="button" className="keys">
              7
            </button>
            <button name="8" onClick={handleClick} type="button" className="keys">
              8
            </button>
            <button name="9" onClick={handleClick} type="button" className="keys">
              9
            </button>
            <button
              name="*"
              onClick={handleClick}
              type="button"
              className="keys special"
            >
              x
            </button>
          </div>
          <div className="third-row">
            <button name="4" onClick={handleClick} type="button" className="keys">
              4
            </button>
            <button name="5" onClick={handleClick} type="button" className="keys">
              5
            </button>
            <button name="6" onClick={handleClick} type="button" className="keys">
              6
            </button>
            <button
              name="-"
              onClick={handleClick}
              type="button"
              className="keys special"
            >
              -
            </button>
          </div>
          <div className="fourth-row">
            <button name="1" onClick={handleClick} type="button" className="keys">
              1
            </button>
            <button name="2" onClick={handleClick} type="button" className="keys">
              2
            </button>
            <button name="3" onClick={handleClick} type="button" className="keys">
              3
            </button>
            <button
              name="+"
              onClick={handleClick}
              type="button"
              className="keys special"
            >
              +
            </button>
          </div>
        </div>
        <div className="firth-row">
          <button
            name="0"
            onClick={handleClick}
            type="button"
            className="keys zero-width"
          >
            0
          </button>
          <button
            name="."
            onClick={handleClick}
            type="button"
            className="keys dot-width"
          >
            .
          </button>
          <button
            onClick={handleClick}
            type="button"
            id="results"
            className="keys special"
          >
            =
          </button>
        </div>
      </div>

    </>
  );
}

export default CalcFun;
