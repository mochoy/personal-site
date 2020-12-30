import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

import { ReactGACtx } from '../../../App';


import './index.scss';


// Renders button and text to previous and next posts, if specified
const AdjacentPosts = ({ prevPost, nextPost }) => {
  // Destructure url and title if posts are defined
  const { url: prevUrl, title: prevTitle } = !!prevPost ? prevPost : {};
  const { url: nextUrl, title: nextTitle } = !!nextPost ? nextPost : {};

  const linkClassName="no-style-link flex-container-vertically-center flex-container-left text-hover-grey";

  const ReactGA = useContext(ReactGACtx);


  return (
    <div id="AdjacentPosts">
      { !!prevUrl && !!prevTitle &&
        <Link id="prev-link" className={linkClassName} to={prevUrl}
          onClick={() => {
            ReactGA.event({
              category: 'Blog Post',
              action: 'Click Adjacent Post',
              label: `Prev to ${prevTitle}`
            });
          }}
        >
          <ArrowBack/>
          <p className="adj-txt">{prevTitle}</p>
        </Link>
      }
      { !(!!prevUrl && !!prevTitle) &&
        <div></div>
      }

      { !!nextUrl && !!nextTitle &&
        <Link id="next-link" className={linkClassName} to={nextUrl}
          onClick={() => {
            ReactGA.event({
              category: 'Blog Post',
              action: 'Click Adjacent Post',
              label: `Next to ${nextTitle}`
            });
          }}
        >
          <p className="adj-txt">{nextTitle}</p>
          <ArrowForward/>
        </Link>
      }
      { !(!!nextUrl && !!nextTitle) &&
        <div></div>
      }

    </div>
  )
}

export default AdjacentPosts;