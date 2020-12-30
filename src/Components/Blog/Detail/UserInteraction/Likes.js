import React, { useContext } from 'react';
import { ThumbUpAltOutlined, ThumbUp } from '@material-ui/icons';
import ReactTooltip from 'react-tooltip';

import { ReactGACtx } from '../../../App';


const Likes = props => {
  const { likes, likeStatus, onLikeEvent } = props;

  const ReactGA = useContext(ReactGACtx);

  return (
    <div id="Likes" className="flex-container-vertically-center">
      { likeStatus === "unliked" &&
        <ThumbUpAltOutlined className="mouse-on-hover"
          data-tip data-for='like-tooltip' 
          onClick={() => {
            onLikeEvent("liked");

            ReactGA.event({
              category: 'Blog Post',
              action: 'Liked'
            });
          }}
        />
      }
      { likeStatus === "liked" &&
        <ThumbUp className="mouse-on-hover"
          data-tip data-for='like-tooltip' 
          onClick={() => {
            onLikeEvent("unliked");

            ReactGA.event({
              category: 'Blog Post',
              action: 'Unliked'
            });
          }}
        />
      }

      <ReactTooltip id='like-tooltip' effect='solid'>
        <p style={{ margin: 0 }}>{likeStatus === "unliked" ? "Like" : "Unlike"}</p>
      </ReactTooltip>

      <p style={{ marginLeft: "0.5em" }}>
        {`${likes} like${likes === 1 ? "" : "s"}`}
      </p>
       
    </div>
  )
};

export default Likes;