import React from 'react';
import scrollToElement from 'scroll-to-element';

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


const App = () => {
  const pathname = window.location.pathname;  // montychoy.com/{pathname}

  console.log(pathname)


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
        projectsData={
          projects.map((project, index) => {
            // Apply id to each project
            return {
              id: Date.now() + index,
              ...project
            }
          })
        }
      />

      <Footer/>
    </div>
  );
}

export default App;
