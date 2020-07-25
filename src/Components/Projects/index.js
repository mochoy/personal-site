import React from 'react';

import { MdPeopleOutline } from "react-icons/md";
import { IoMdTime } from 'react-icons/io';
import { GoLocation } from "react-icons/go";
import { FiAward } from "react-icons/fi";

import './index.css';


const Projects = props => {
  const { projectsData } = props;

  console.log()

  return (
    <section id="Projects" className="section">
      <div className="section-content">
        <h1 className="section-title">Projects</h1>
      </div>

      {/* Featured projects */}
      {
        projectsData
          .filter(project => project.isFeatured)
          .map((project, key) => {
            const { img, title, by, date, event, prize, description} = project;

            // Refers to image direction on left or right of text
            const direction = key % 2 === 0 ? "left" : "right";

            // Icons and corresponding text
            const icons = [
              {
                Icon: MdPeopleOutline,
                text: by
              },
              {
                Icon: IoMdTime,
                text: date
              },
              {
                Icon: GoLocation,
                text: event
              },
              {
                Icon: FiAward,
                text: prize
              }
            ]

            return (
              <div key={key}
                className={`featured-project-container ${direction} horizontally-center`} 
              >
                {/* Left box */}
                { direction === "left" &&
                  <div className="flex-container-horizontally-center">
                    <img alt={title + "-img"}
                      src={require("../../assets/images/projects/" + img)} 
                    />
                    <div className="content">
                      <h2>{title}</h2>

                      {/* Icons + text */}
                      { icons.map(({ Icon, text }, key) => {
                          if (!!text && text.length > 0) {
                            return (
                              <div key={key}
                                className="flex-container-vertically-center float-right"
                              >
                                <Icon className="icon"/>
                                <p className="display-inline icon-txt">{text}</p> 
                              </div>
                            )
                          } 

                        })
                      }
                      
                    </div>
                  </div>
                }
                {
                  direction === "right" &&
                  <div className="flex-container-horizontally-center">
                    <div className="content">
                      <h2>{title}</h2>
                    </div>
                    <img alt={title + "-img"}
                      src={require("../../assets/images/projects/" + img)} 
                    />
                  </div>
                }
                
                
              </div>
            );
          })
      }
    </section>
  )
};

export default Projects;