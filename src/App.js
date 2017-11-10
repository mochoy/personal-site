import React, { Component } from 'react';

import './App.css';

import Home from './components/Home/index';
import About from './components/About/index';
import TransitionImg from './components/TransitionImg/index';
import Portfolio from './components/Portfolio/index';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <About/>
        <TransitionImg imgKey="0" />
        <Portfolio/>
      </div>
    );
  }
}

export default App;
