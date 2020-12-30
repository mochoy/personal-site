// Renderers for remark md
import React from 'react';
import LinkIcon from '@material-ui/icons/Link'; 
import scrollToElement from 'scroll-to-element';
import { Link } from 'react-router-dom';

import stringToUrl from '../../../helpers/stringToUrl';

import { scrollToOffset } from '../../../consts';


/**
 * Hook to scroll to element based on hash in url
 * 
 * @param {String} filePath: filePath attribute from post, path to files use to
 *  import images
 * @param {Object} ReactGA: ReactGA object used for GA
 * 
 * @returns {Object}: Object of renderers to match remark renderer spec
 */
const renderers = (filePath, ReactGA) => {
  return {
    // Render for img, make sure get correct path to image via require()
    image: ({src, alt}) => {
      return <img src={require(`assets/blog/${filePath}/${src}`)} alt={alt} />
    },

    // Apply id's to headings so they can easily be scrolled to via links
    heading: ({ level, node }) => {
      // Get text and generate id based on url of text to correspond with ToC 
      // links
      const text = node.children[0].value;
      const id = stringToUrl(text);   // Just id generated from heading txt
      const fullId = `#${id}`;        // Id including the #

      const generateHeaderJSX = () => {
        switch (level) {
          case 1: 
            return <h1 id={id}>{text}</h1>
          case 2: 
            return <h2 id={id}>{text}</h2>
          case 3: 
            return <h3 id={id}>{text}</h3>
          case 4: 
            return <h4 id={id}>{text}</h4>
          default: 
            return null;
        }
      }
      
      return (
        <Link to={fullId} 
          className="flex-container-vertically-center heading-container"
          onClick={() => scrollToElement(fullId, { offset: scrollToOffset })}
        >
        {generateHeaderJSX()}
        <LinkIcon fontSize="small" className="heading-link-icon"/>
      </Link>
      );
    },

    // Use react-router links if the destination is within the site, otherwise 
    // use <a> 
    link: ({ href, node }) => {
      const text = node.children[0].value;

      // First char in link is /, meaning destination is internal
      if (href[0] === "/") {
        return (<Link to={href}>{text}</Link>)
      }
      // External destination
      return (
        <a href={href} target="_blank" without="true" rel="noopener noreferrer">
          {text}
        </a>
      )
    }

  };

} // Renderers


export default renderers;