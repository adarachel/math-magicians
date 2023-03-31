import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Quotes from './components/Quote';

function App() {
  return (
    <div className="App">
      <Quotes />
      <Calculator />
    </div>
  );
}

export default App;
