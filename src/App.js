import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quote';
import './navbar.css';

const App = () => (
  <Router>
    <nav className="navbar">
      <h1>Awesome Books</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/calculator" className="navbar-link">Calculator</Link>
        </li>
        <li>
          <Link to="/quote" className="navbar-link">Quotes</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quotes />} />
    </Routes>
  </Router>
);

export default App;
