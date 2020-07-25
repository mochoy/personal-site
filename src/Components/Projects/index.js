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
                      
                      {/* By/ppl */}
                      { !!by && by.length > 0 && 
                        <div className="flex-container-vertically-center float-right">
                          <MdPeopleOutline className="icon"/>
                          <p className="display-inline icon-txt">{by}</p> 
                        </div>
                      }

                      {/* Time/date */}
                      { !!date && date.length > 0 && 
                        <div className="flex-container-vertically-center float-right">
                          <IoMdTime className="icon"/>
                          <p className="display-inline icon-txt">{date}</p> 
                        </div>
                      }

                      {/* Event */}
                      { !!event && event.length > 0 && 
                        <div className="flex-container-vertically-center float-right">
                          <GoLocation className="icon"/>
                          <p className="display-inline icon-txt">{event}</p> 
                        </div>
                      }

                      {/* Award/Prize */}
                      { !!prize && prize.length > 0 && 
                        <div className="flex-container-vertically-center float-right">
                          <FiAward className="icon"/>
                          <p className="display-inline icon-txt">{prize}</p> 
                        </div>
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