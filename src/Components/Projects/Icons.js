import React from 'react';

import { MdPeopleOutline } from "react-icons/md";
import { IoMdTime } from 'react-icons/io';
import { GoLocation } from "react-icons/go";
import { FiAward } from "react-icons/fi";


const Icons = props => {
  const { direction, by, date, event, prize } = props;

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

  return icons
    .filter(({ text }) => !!text && text.length > 0)
    .map(({ Icon, text }, key) => {
      return (
        <div key={key}
          className={`flex-container-vertically-center flex-container-${direction}`}
        >
          <Icon className={`icon`}/>
          <p className="display-inline icon-txt">{text}</p> 
        </div>
      )   // Return
    })  // Map
}

export default Icons;