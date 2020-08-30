import React, { useContext } from 'react';

import ReactTooltip from 'react-tooltip';
import { GoMarkGithub, GoFileCode, GoCircuitBoard } from "react-icons/go";
import { FiExternalLink, FiGlobe, FiEdit2 } from "react-icons/fi";
import { FaPencilRuler } from "react-icons/fa";

import { ReactGACtx } from '../../App';


const LinksAndCategories = props => {
  const { open, title, files, categories, direction } = props;

  const ReactGA = useContext(ReactGACtx);

  const containerClassName = (!!direction && direction.length > 0) 
    ? `flex-container-${direction}` 
    : `flex-container`;

  return (
    <div className={`Links ${containerClassName}`}>
      { direction === "right" &&
        <CategoryIcons 
          categories={categories} 
          title={title}
        />
      }

      {/* Links */}
      <div style={{ flexGrow: 1 }}>
        {/* gh/files */}
        { !!files &&
          <a className="mouse-on-hover project-link-icon no-style-link" 
            href={files} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GoMarkGithub size="1.5em"/>
          </a>
        }

        {/* Open */}
        { !!open &&
          <a className="mouse-on-hover project-link-icon no-style-link" 
            href={open} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FiExternalLink size="1.5em"/>
          </a>
        }
      </div>

      { direction !== "right" &&
        <CategoryIcons 
          categories={categories} 
          title={title}
        />
      }

    </div>
  )
}


const CategoryIcons = props => {
  const { categories, title } = props;

  const ReactGA = useContext(ReactGACtx);


  return (
    <div>
      {/* Software Icon */}
      { categories.indexOf("Software") !== -1 &&
        <GoFileCode 
          size="1.5em" 
          data-tip data-for='softwareTooltip' 
          onMouseEnter={() => {
            ReactGA.event({
              category: 'Project',
              action: 'Icon Hover',
              label: `${title} - Software`
            });
          }}
        />
      }

      <ReactTooltip id='softwareTooltip' effect='solid'>
        <p style={{ margin: 0 }}>Software Project</p>
      </ReactTooltip>


      {/* Hardware Icon */}
      { categories.indexOf("Hardware") !== -1 &&
        <GoCircuitBoard 
          size="1.5em" 
          data-tip data-for='hardwareTooltip'
          onMouseEnter={() => {
            ReactGA.event({
              category: 'Project',
              action: 'Icon Hover',
              label: `${title} - Hardware`
            });
          }}
        />
      }

      <ReactTooltip id='hardwareTooltip' effect='solid'>
        <p style={{ margin: 0 }}>Hardware Project</p>
      </ReactTooltip>


      {/* Web Icon */}
      { categories.indexOf("Web") !== -1 &&
        <FiGlobe 
          size="1.5em" 
          data-tip data-for='webTooltip'
          onMouseEnter={() => {
            ReactGA.event({
              category: 'Project',
              action: 'Icon Hover',
              label: `${title} - Web`
            });
          }}
        />
      }

      <ReactTooltip id='webTooltip' effect='solid'>
        <p style={{ margin: 0 }}>Web Project</p>
      </ReactTooltip>


      {/* Nerf Icon */}
      { categories.indexOf("Nerf") !== -1 &&
       <FiEdit2 
        size="1.5em" 
        data-tip data-for='nerfTooltip'
        onMouseEnter={() => {
          ReactGA.event({
            category: 'Project',
            action: 'Icon Hover',
            label: `${title} - Nerf`
          });
        }}
       />
      }

      <ReactTooltip id='nerfTooltip' effect='solid'>
        <p style={{ margin: 0 }}>Nerf Project</p>
      </ReactTooltip>


      {/* Architecture Icon */}
      { categories.indexOf("Architecture") !== -1 &&
        <FaPencilRuler 
          size="1.5em" 
          data-tip 
          data-for='architectureTooltip'
          onMouseEnter={() => {
            ReactGA.event({
              category: 'Project',
              action: 'Icon Hover',
              label: `${title} - Architecture`
            });
          }}
        />
      }

      <ReactTooltip id='architectureTooltip' effect='solid'>
        <p style={{ margin: 0 }}>Architecture Project</p>
      </ReactTooltip>

    </div>
  )
}

export default LinksAndCategories;