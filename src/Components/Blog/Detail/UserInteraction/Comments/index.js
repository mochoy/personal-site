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

      <div style={{ margin: "0 auto", width: "90%" }}>
        { Object.keys(comments).length <= 1 &&
          <p>There are no comments.</p>
        }

        { Object.keys(comments).length > 1 &&
          Object.keys(comments).map((key, i) => {
            // Skip first comment because it's dummy init
            if (i > 0) {
              const { id, name, text } = comments[key];

              return (
                <div className="comment" key={i}>
                  <p className="name">{name}</p>
                  <p className="time-ago">{timeAgo.format(id)}</p>
                  
                  <p className="text">{text}</p>
                </div>
              )
            // Need to return something to avoid warning
            } else {
              return <div></div>
            }
          })
        }
      </div>
      
      <Form {...props}/>
    </div>
  );
}


export default Comments;