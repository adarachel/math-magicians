import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Button from './ButtonComponents/Button';

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
          <Button className="button" name="AC" handleClick={() => handleClick('AC')} />
          <Button className="button" name="+/-" handleClick={() => handleClick('+/-')} />
          <Button className="button" name="%" handleClick={() => handleClick('%')} />
          <Button className="button operator" name="÷" handleClick={() => handleClick('÷')} />
        </div>
        <div className="row">
          <Button className="button" name="7" handleClick={() => handleClick('7')} />
          <Button className="button" name="8" handleClick={() => handleClick('8')} />
          <Button className="button" name="9" handleClick={() => handleClick('9')} />
          <Button className="button operator" name="x" handleClick={() => handleClick('x')} />
        </div>
        <div className="row">
          <Button className="button" name="4" handleClick={() => handleClick('4')} />
          <Button className="button" name="5" handleClick={() => handleClick('5')} />
          <Button className="button" name="6" handleClick={() => handleClick('6')} />
          <Button className="button operator" name="-" handleClick={() => handleClick('-')} />
        </div>
        <div className="row">
          <Button className="button" name="1" handleClick={() => handleClick('1')} />
          <Button className="button" name="2" handleClick={() => handleClick('2')} />
          <Button className="button" name="3" handleClick={() => handleClick('3')} />
          <Button className="button operator" name="+" handleClick={() => handleClick('+')} />
        </div>
        <div className="row">
          <Button className="button" name="0" handleClick={() => handleClick('0')} />
          <Button className="button" name="." handleClick={() => handleClick('.')} />
          <Button className="button operator" name="=" handleClick={() => handleClick('=')} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
