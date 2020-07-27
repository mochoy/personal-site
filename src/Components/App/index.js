import React from 'react';

import Home from '../Home';
import About from '../About';
import Experience from '../Experience';
import Projects from '../Projects';
import Footer from '../Footer';

import logos from '../../assets/data/logos.js';
import buzzwords from '../../assets/data/buzzwords.js';
import experience from '../../assets/data/experience'; 
import projects from '../../assets/data/projects'; 


import './index.css';


function App() {
  return (
    <div className="App">
      <Home/>

      <About
        logosData={logos}
        buzzwords={buzzwords}
      />

      <Experience
        experienceData={experience}
      />

      <Projects
        projectsData={projects}
      />

      <Footer/>
    </div>
  );
}

export default App;
