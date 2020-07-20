import React from 'react';

import Home from '../Home';
import About from '../About';

import logos from '../../assets/data/logos.js';
import buzzwords from '../../assets/data/buzzwords.js';

import logo from '../../assets/images/logo.svg';

import './index.css';


function App() {
  return (
    <div className="App">
      <Home/>
      <About
        logosData={logos}
        buzzwords={buzzwords}
      />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
