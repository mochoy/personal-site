import React from 'react';
import GitHubCalendar from 'react-github-calendar';

import Logos from './Logos';
import Resumes from './Resumes';
import Buzzwords from './Buzzwords';


import './index.css';


const About = props => {
  const { logosData, buzzwords } = props;

  return (
    <section id="About" className="section">
      <div className="section-content">
        <h1 className="section-title">About Me</h1>

        {/* Main content */}
        <div id="main-content" 
          className="flex-container-horizontally-center horizontally-center"
        >
          {/* Text */}
          <div id="about-text-container">
            <p>
              I'm Monty! I'm from San Francisco, CA and I'm currently studying electrical engineering at Cal Poly SLO. I've worked at Apple and Microsoft and I also run Suild. I've been coding for 9+ years and working with electronics for 5+ years.
            </p>

            <p>
              On the hardware side, I did a 9-month hardware engineering co-op at Apple and I run Suild. I do DC-DC power electronics, high-speed digital design, MCUs, embedded systems hardware, PCB layout and design, motor and solenoid drives, and electronics manufacturing and testing.
            </p>

            <p>
              On the software side, I'm currently doing a software engineering internship at Microsoft. I do full-stack web development with the MERN stack, firmware, and embedded systems software. I've also dabbled with game development, Android development, machine learning, cloud development, and computer vision.
            </p>

            <p>
              In my free time, in addition to coding and electronics, I like to breakdance (working on Halos and headspins), modify Nerf guns (Stryfe is my favorite), and play board games (Dominion and Grifters are my favorites) and Yu-Gi-Oh (I run Agents link spam + Krystia turbo).
            </p>
          </div>

          <Logos logosData={logosData} />

        </div>

        {/* Resumes */}
        <Resumes/>

        {/* Buzzwords */}
        <Buzzwords
          hweBuzzwords={buzzwords.hwe}
          sweBuzzwords={buzzwords.swe}
        />
        
        {/* Green boxes */}
        <div className="horizontally-center">
          <h2 className="text-center">
            GitHub Stats
          </h2>

          <div className="flex-container-horizontally-center">
            <GitHubCalendar username="mochoy"/>
          </div>

          <div className="flex-container-horizontally-center">
            <a href="https://github.com/anuraghazra/github-readme-stats">
              <img id="gh-stats-img"
                align="center" 
                src="https://github-readme-stats.anuraghazra1.vercel.app/api?username=mochoy&show_icons=true&count_private=true&hide=issues&include_all_commits=true" alt="My github stats" 
              />
            </a>  
            <a href="https://github.com/anuraghazra/github-readme-stats">
              <img id="top-languages-img"
                align="center" 
                src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=mochoy&layout=compact" 
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;