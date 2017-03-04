import React, { Component } from 'react';
import Intro from './components/Intro/index';
import Projects from './components/Projects/index';


class App extends Component {
  render() {
    return (
		<div className="App">
			<Intro/>
			<Projects/>
		</div>
    );
  }
}

export default App;
