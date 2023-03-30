import React from 'react';
import './Calculator.css';

function Calculator() {
  const handleClick = (value) => {
    console.log(value);
  };

  return (
    <div className="calculator">
      <div className="screen" />
      <div className="buttons">
        <div className="row">
          <button className="button" type="button" onClick={() => handleClick('7')}>7</button>
          <button className="button" type="button" onClick={() => handleClick('8')}>8</button>
          <button className="button" type="button" onClick={() => handleClick('9')}>9</button>
          <button className="button operator" type="button" onClick={() => handleClick('+')}>+</button>
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
          <button className="button operator" type="button" onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="row">
          <button className="button" type="button" onClick={() => handleClick('0')}>0</button>
          <button className="button" type="button" onClick={() => handleClick('.')}>.</button>
          <button className="button operator" type="button" onClick={() => handleClick('/')}>/</button>
          <button className="button operator" type="button" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
