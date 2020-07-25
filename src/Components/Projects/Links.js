import React from 'react';

import { GoMarkGithub } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";


const Links = props => {
  const { open, files, direction } = props;

  return (
    <div className={`Links flex-container-${direction}`}>
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
  )
}

export default Links;