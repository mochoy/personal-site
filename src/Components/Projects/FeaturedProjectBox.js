import React from 'react';

import { MdPeopleOutline } from "react-icons/md";
import { IoMdTime } from 'react-icons/io';
import { GoLocation } from "react-icons/go";
import { FiAward } from "react-icons/fi";

import Links from './Links';

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


  // Refers to text on left or right of text
  const direction = index % 2 === 1 ? "left" : "right";

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
      { direction === "right" &&
        <div className="flex-container-horizontally-center">
          <div className="bg-img"
            style={{
              backgroundImage: 'url(' + require(`../../assets/images/projects/${img}`)
            }}
          />
          <div className="content">
            <h2>{title}</h2>

            {/* Icons + text */}
            { icons
              .filter(({ text }) => !!text && text.length > 0)
              .map(({ Icon, text }, key) => {
                return (
                  <div key={key}
                    className="flex-container-vertically-center flex-container-right"
                  >
                    <Icon className="icon"/>
                    <p className="display-inline icon-txt">{text}</p> 
                  </div>
                )   // Return
              })  // Map
            }

            <p>{description}</p>

            <Links open={open} files={files} direction={direction}/>
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
