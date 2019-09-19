import React, { Component } from 'react';

import '../../styles/background-img.css';
import '../../styles/flex-containers.css';
import '../../styles/chevron.css';
import '../../styles/misc.css';
import '../../styles/animations.css';
import '../../styles/text.css';

import './index.css';

import Home from '../Home/index';
import About from '../About/index';
import Skills from '../Skills/index';
import Experience from '../Experience/index';
import TransitionImg from '../TransitionImg/index';
import Projects from '../Projects/index';
import Architecture from '../Architecture/index';
import Footer from '../Footer/index';
import Tutorials from '../Tutorials/index';


export default class App extends Component {
  constructor (props) {
    super(props);

    this.data = require('assets/data/data.js').data;
  }

  render() {
    const SKILLS_DATA = require('assets/data/SKILLS.js').DATA;
    const EXPERIENCE_DATA = require('assets/data/EXPERIENCE.js').DATA;

    return (
      <div className="App">
        <Home data={this.data.homeData}/>
        <About data={this.data.about}/> 
        <Skills data={SKILLS_DATA}/>
        <Experience/>
        <Projects data={this.data.projectData} filterCategories={this.data.filterCategories}/>
        <Architecture data={this.data.architectureData}/>
        <Tutorials data={this.data.tutorialsData}/>
        <Footer/>
      </div>
    );
  }
}

