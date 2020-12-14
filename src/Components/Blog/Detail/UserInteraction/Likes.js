import React from 'react';
import { ThumbUpAltOutlined, ThumbUp } from '@material-ui/icons';


const Likes = props => {
  const { likes, likeStatus, onLikeEvent } = props;

  return (
    <div id="Likes">
      { likeStatus === "unliked" &&
        <ThumbUpAltOutlined fontSize="large" className="mouse-on-hover"
          onClick={() => onLikeEvent("liked")}
        />
      }
      { likeStatus === "liked" &&
        <ThumbUp fontSize="large" className="mouse-on-hover"
          onClick={() => onLikeEvent("unliked")}
        />
      }
      

    </div>
  )
};

export default Likes;