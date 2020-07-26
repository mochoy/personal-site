import React from 'react';

import ReactTooltip from 'react-tooltip';
import { GoMarkGithub, GoFileCode, GoCircuitBoard } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";


const Links = props => {
  const { open, files, categories, direction } = props;

  const containerClassName = (!!direction && direction.length > 0) 
    ? `flex-container-${direction}` 
    : `flex-container`;

  return (
    <div className={`Links ${containerClassName}`}>
      { direction === "right" &&
        <CategoryIcons  categories={categories}/>
      }

      {/* Links */}
      <div style={{ flexGrow: 1 }}>
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

      { direction !== "right" &&
        <CategoryIcons  categories={categories}/>
      }

    </div>
  )
}


const CategoryIcons = props => {
  const { categories } = props;

  return (
    <div>
      {/* Software Icon */}
      { categories.indexOf("Software") !== -1 &&
        <GoFileCode size="1.5em" data-tip data-for='softwareTooltip'/>
      }

      <ReactTooltip id='softwareTooltip' effect='solid'>
        <p style={{ margin: 0 }}>Software Project</p>
      </ReactTooltip>


      {/* Hardware Icon */}
      { categories.indexOf("Hardware") !== -1 &&
        <GoCircuitBoard size="1.5em" data-tip data-for='hardwareTooltip'/>
      }

      <ReactTooltip id='hardwareTooltip' effect='solid'>
        <p style={{ margin: 0 }}>Hardware Project</p>
      </ReactTooltip>

    </div>
  )
}

export default Links;