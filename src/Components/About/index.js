import React from 'react';

import StarRatings from 'react-star-ratings';
import GitHubCalendar from 'react-github-calendar';

import Logos from './Logos';

import './index.css';


const hweBuzzwords = [
  {
    name: "DC-DC Power Electronics",
    rating: 4.75
  },
  {
    name: "Embedded Systems",
    rating: 4.75
  },
  {
    name: "Inductive Load Drives",
    rating: 4.5
  },
  {
    name: "PCB Layout & Design",
    rating: 4.5
  },
  {
    name: "Microcontrollers",
    rating: 4.4
  },
  {
    name: "High-Speed Digital Design",
    rating: 4.3
  },
  {
    name: "Computer Architecture",
    rating: 4.2
  }
];

const sweBuzzwords = [
  {
    name: "JavaScript",
    rating: 4.75
  },
  {
    name: "Embedded Programming",
    rating: 4.75
  },
  {
    name: "React",
    rating: 4.75
  },
  {
    name: "Node.js",
    rating: 4.6
  },
  {
    name: "Python",
    rating: 4.5
  },
  {
    name: "C++",
    rating: 4.4
  },
  {
    name: "C",
    rating: 4.3
  }
];

const About = props => {
  const { logosData } = props;

  return (
    <section id="About" className="section">
      <h1 className="section-title">About Me</h1>

      {/* Main content */}
      <div className="flex-container-horizontally-center horizontally-center">
        {/* Text */}
        <div id="about-text-container">
          <p>
            I'm Monty! I'm based in San Francisco, CA and I'm currently studying electrical engineering at Cal Poly SLO. I've worked at Apple and Microsoft and I also run Suild. I've been coding for 9+ years and working with electronics for 5+ years.
          </p>

          <p>
            On the hardware side, I did a 9-month hardware engineering co-op at Apple and I run Suild. I do DC-DC power electronics, high-speed digital design, MCUs, embedded systems hardware, PCB layout and design, motor and solenoid drives, and electronics manufacturing and testing.
          </p>

          <p>
            On the software side, I'm currently doing a software engineering internship at Microsoft. I do full-stack web development with the MERN stack, firmware, and embedded systems software. I've also dabbled with game development, Android development, machine learning, cloud development, and computer vision.
          </p>

          <p>
            In my free time, in addition to coding and electronics, I like to breakdance (workng on Halos and headspins), modify Nerf guns (Stryfe is my favorite), and play board games (Dominion and Grifters are my favorites) and Yu-Gi-Oh (I run Agents link spam + Krystia turbo).
          </p>
        </div>

        <Logos logosData={logosData} />

      </div>

      {/* Buzzwords */}
      <div id="buzzwords-container">
        <h2 className="text-center">
          Buzzwords and Meaningless Quantifications
        </h2>

        <div className="flex-container-horizontally-center">
          {/* Column 1 - HWE */}
          <div className="column">
            <h3 className="text-center">Hardware Engineering</h3>

            {
              hweBuzzwords.map((buzzword, index) => {
                const { name, rating } = buzzword;

                return (
                  <div className="flex-container-vertically-center" 
                    key={index}
                  >
                    <p className="text">{name}</p>

                    <StarRatings
                      rating={rating}
                      numberOfStars={5}

                      starRatedColor="blue"
                      starDimension="20px"
                      starSpacing=""
                    />
                  </div>
                )
              })
            }
            
          </div>

          {/* Column 2 - SWE */}
          <div className="column">
            <h3 className="text-center">Software Engineering</h3>

            {
              sweBuzzwords.map((buzzword, index) => {
                const { name, rating } = buzzword;

                return (
                  <div className="flex-container-vertically-center" 
                    key={index}
                  >
                    <p className="text">{name}</p>

                    <StarRatings
                      rating={rating}
                      numberOfStars={5}

                      starRatedColor="blue"
                      starDimension="20px"
                      starSpacing=""
                    />
                  </div>
                )
              })
            }
          </div>
          
        </div>
      </div>
      
      {/* Green boxes */}
      <div className="horizontally-center">
        <h2 className="text-center">
          GitHub Contributions
        </h2>

        <div className="flex-container-horizontally-center">
          <GitHubCalendar username="mochoy"/>
        </div>
      </div>


    </section>
  )
}

export default About;