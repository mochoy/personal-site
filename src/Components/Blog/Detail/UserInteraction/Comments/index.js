import React from 'react';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import Form from './Form';


TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const Comments = props => {
  const { comments } = props;

  return (
    <div id="Comments">
      <h3>Comments</h3>

      { Object.keys(comments).length <= 1 &&
        <p>There are no comments.</p>
      }

      { Object.keys(comments).length > 1 &&
        Object.keys(comments).map((key, i) => {
          const { id, name, text } = comments[key];

          return (
            <div className="comment" key={i}>
              <p>{timeAgo.format(id)}</p>
              <p>{name}</p>
              <p>{text}</p>
            </div>
          )
        })
      }
      
      <Form {...props}/>
    </div>
  );
}


export default Comments;