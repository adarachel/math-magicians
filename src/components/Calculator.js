import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    if (buttonName === 'AC') {
      setTotal(null);
      setNext(null);
      setOperation(null);
      setDisplay('0');
      return;
    }
    const result = calculate({ total, next, operation }, buttonName);
    if (result) {
      setTotal(result.total);
      setNext(result.next);
      setOperation(result.operation);
      setDisplay((display === '0' && buttonName !== '.') ? buttonName : display + buttonName);
    }
    if (buttonName === '=') {
      setDisplay(result.total);
      setTotal(result.total);
      setNext(null);
      setOperation(null);
    }
  };

  return (
    <div className="calculator">
      <div className="screen">{display}</div>
      <div className="buttons">
        <div className="row">
          <button className="button" type="button" onClick={() => handleClick('AC')}>AC</button>
          <button className="button" type="button" onClick={() => handleClick('+/-')}>+/-</button>
          <button className="button" type="button" onClick={() => handleClick('%')}>%</button>
          <button className="button operator" type="button" onClick={() => handleClick('÷')}>÷</button>
        </div>
        <div className="row">
          <button className="button" type="button" onClick={() => handleClick('7')}>7</button>
          <button className="button" type="button" onClick={() => handleClick('8')}>8</button>
          <button className="button" type="button" onClick={() => handleClick('9')}>9</button>
          <button className="button operator" type="button" onClick={() => handleClick('x')}>x</button>
        </div>
        <div className="row">
          <button className="button" type="button" onClick={() => handleClick('4')}>4</button>
          <button className="button" type="button" onClick={() => handleClick('5')}>5</button>
          <button className="button" type="button" onClick={() => handleClick('6')}>6</button>
          <button className="button operator" type="button" onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="row">
          <button className="button" type="button" onClick={() => handleClick('1')}>1</button>
          <button className="button" type="button" onClick={() => handleClick('2')}>2</button>
          <button className="button" type="button" onClick={() => handleClick('3')}>3</button>
          <button className="button operator" type="button" onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="button" type="button" onClick={() => handleClick('0')}>0</button>
          <button className="button" type="button" onClick={() => handleClick('.')}>.</button>
          <button className="button operator" type="button" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
