import React, { useContext } from 'react';

import { GoMarkGithub } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";

import CategoryIcons from './CategoryIcons';

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
          containerStyle={{ 
            // Make sure these icons stay on the left
            flexGrow: 1, 
            display: "flex" 
          }}
          categories={categories} 
          title={title}
        />
      }

      {/* Links */}
      <div style={ direction !== "right" ? { flexGrow: 1 } : {} }>
        {/* gh/files */}
        { !!files &&
          <a className="mouse-on-hover project-link-icon no-style-link" 
            href={files} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => {
              ReactGA.event({
                category: 'Project',
                action: 'Click Link',
                label: `${title} - gh/files`
              });
            }}
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
            onClick={() => {
              ReactGA.event({
                category: 'Project',
                action: 'Click Link',
                label: `${title} - Open`
              });
            }}
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

export default LinksAndCategories;