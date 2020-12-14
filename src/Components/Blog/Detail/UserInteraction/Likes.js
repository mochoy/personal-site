import React from 'react';
import { ThumbUpAltOutlined, ThumbUp } from '@material-ui/icons';
import ReactTooltip from 'react-tooltip';


const Likes = props => {
  const { likes, likeStatus, onLikeEvent } = props;

  return (
    <div id="Likes" className="flex-container-vertically-center">
      { likeStatus === "unliked" &&
        <ThumbUpAltOutlined fontSize="default" className="mouse-on-hover"
          data-tip data-for='like-tooltip' 
          onClick={() => onLikeEvent("liked")}
        />
      }
      { likeStatus === "liked" &&
        <ThumbUp fontSize="default" className="mouse-on-hover"
          data-tip data-for='like-tooltip' 
          onClick={() => onLikeEvent("unliked")}
        />
      }

      <ReactTooltip id='like-tooltip' effect='solid'>
        <p style={{ margin: 0 }}>{likeStatus === "unliked" ? "Like" : "Unlike"}</p>
      </ReactTooltip>
    </div>
  )
};

export default Likes;