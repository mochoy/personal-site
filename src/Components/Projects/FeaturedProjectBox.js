import React from 'react';

import { MdPeopleOutline } from "react-icons/md";
import { IoMdTime } from 'react-icons/io';
import { GoLocation, GoMarkGithub } from "react-icons/go";
import { FiAward, FiExternalLink } from "react-icons/fi";


const FeaturedProjectBox = props => {
  const { project, index } = props;

  const {
    img, 
    title, 
    by, 
    date, 
    event, 
    prize, 
    description,
    links } = project;

  const { open, files } = links;


  // Refers to image direction on left or right of text
  const direction = index % 2 === 0 ? "left" : "right";

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
  ];

  return (
    <div key={index}
      className={`FeaturedProject ${direction} horizontally-center`} 
    >
      {/* Left box */}
      { direction === "left" &&
        <div className="flex-container-horizontally-center">
          <div className="bg-img"
            style={{
              backgroundImage: 'url(' + require("../../assets/images/projects/" + img) + ')'
            }}
          />
          <div className="content">
            <h2>{title}</h2>

            {/* Icons + text */}
            { icons
              .filter(({ text }) => !!text && text.length > 0)
              .map(({ Icon, text }, key) => {
                return (
                  <div className="flex-container-vertically-center flex-container-right">
                    <Icon className="icon"/>
                    <p className="display-inline icon-txt">{text}</p> 
                  </div>
                )   // Return
              })  // Map
            }

            <p>{description}</p>

            {/* Links */}
            <div className="flex-container-right">
              {/* gh/files */}
              { !!files &&
                <a className="mouse-on-hover project-link-icon" 
                  href={files} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <GoMarkGithub size="1.5em"/>
                </a>
              }

              {/* Open */}
              { !!open &&
                <a className="mouse-on-hover project-link-icon" 
                  href={open} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FiExternalLink size="1.5em"/>
                </a>
              }
            </div>
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
  )
}

export default FeaturedProjectBox;
