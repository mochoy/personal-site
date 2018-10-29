import React, { Component } from 'react';

import './index.css';

import Home from '../Home/index';
import About from '../About/index';
import TransitionImg from '../TransitionImg/index';
import Projects from '../Projects/index';
import ArtAndArchitecture from '../ArtAndArchitecture/index';


export default class App extends Component {
  constructor (props) {
    super(props);

    this.data = require('assets/data/data.js').data;
  }

  render() {
    return (
      <div className="App">
        <Home data={this.data.homeData}/>
        <About data={this.data.about}/> 
        <Projects data={this.data.projectData}/>
      </div>
    );
  }
}

