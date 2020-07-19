import React from 'react';

import './index.css';

const logosData = [
  {
    name: "github",
    imgSrc: "github.svg",
    link: "https://github.com/mochoy"
  }, 
  {
    name: "linkedin",
    imgSrc: "linkedin.svg",
    link: "https://www.linkedin.com/in/montychoy/"
  },
  {
    name: "email",
    imgSrc: "email.svg",
    link: "mailto:montychoy00+personal_website@gmail.com"
  },
  {
    name: "facebook",
    imgSrc: "facebook.svg",
    link: "https://www.facebook.com/monty.choy"
  },
  {
    name: "instagram",
    imgSrc: "instagram.svg",
    link: "https://www.instagram.com/darn_bok_choi_is_taken/"
  },
  {
    name: "paypal",
    imgSrc: "paypal.svg",
    link: "https://paypal.me/suild"
  },
  {
    name: "suild",
    imgSrc: "suild.png",
    link: "https://suild.com"
  }
]

const About = props => {
  return (
    <section id="About">
      <h1 className="section-title">About Me</h1>

      {/* Main content */}
      <div className="flex-container-center">
        {/* Text */}
        <div>
          <p>
            In my free time, in addition to coding and electronics, I like to breakdance, modify Nerf guns, and play board games and Yu-Gi-Oh.
          </p>
        </div>

        {/* Links/logos */}
        <div className="flex-container-vertical">
          {
            logosData.map((logoData, key) => {
              return (
                <a href={logoData.link} 
                  className="logo cursor-on-hover"
                  target="_blank" 
                  rel="noopener noreferrer"
                  key={key}
                >
                  <img 
                    className="grow-on-hover" 
                    src={require(`assets/images/logos/${logoData.imgSrc}`)} 
                    alt={logoData.name + "-logo"}
                  />
                </a>
              )
            })
          }
          
        </div>
        
      </div>

    </section>
  )
}

export default About;