import React from 'react';
import logo from './tesla_logo_PNG22.png';
import './App.css';
import Tesla from './Tesla';
import BMW from './BMW';
import Audi from './Audi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

        <a
          className="App-link"
          href="https://www.tesla.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Tesla
        </a>
      </header>
      <Tesla />
      <BMW />
      <Audi />

    </div>
  );
}

export default App;
