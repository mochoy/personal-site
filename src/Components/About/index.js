import React from 'react';

import Logos from './Logos';
import Resumes from './Resumes';
import Buzzwords from './Buzzwords';
import GithubStats from './GithubStats';


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
              On the hardware side, I did a two hardware engineering internships at Apple and I run Suild. I do DC-DC power electronics, high-speed  design, MCUs, embedded systems hardware, PCB layout and design, motor and solenoid drives, electronics manufacturing and testing, computer organization, and SoC platform architecture.
            </p>

            <p>
              On the software side, I'm did a software engineering internship at Microsoft. I do full-stack web development with the MERN stack, firmware, and embedded systems software. I've also dabbled with game development, Android development, machine learning, cloud development, and computer vision.
            </p>

            <p>
              In my free time, in addition to coding and electronics, I like to breakdance (working on Halos and headspins), modify Nerf guns (Stryfe is my favorite), and play board games (Dominion and Grifters are my favorites), Yu-Gi-Oh (I run Agents link spam + Krystia turbo), and Call of Duty Mobile (Top 64 in North America).
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

        <GithubStats/>

      </div>
    </section>
  )
}

export default About;