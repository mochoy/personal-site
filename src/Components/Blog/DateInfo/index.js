import React from 'react';

import './index.css';

/**
 * Component that renders date, word count, and reading time of post inline with 
 * proper styling. When this component was made, it was used in Blog for each 
 * post and BlogDetail for an entire post, so I decided to decompose it into its
 * own component so it could be used everywhere easier.
 * 
 * @param {String} post: post data, should have date, wordCount, readingTime, props
 * 
 * @return {JSX} component with date info stuff 
 */
const DateInfo = ({ post }) => {
  const { date, wordCount, readingTime } = post;

  return (
    <div className="DateInfo flex-container">
      <p className="date">{date}</p>
      <p className="word-count">{`${wordCount} words`}</p>
      <p className="reading-time">{`${readingTime} min read`}</p>
    </div>
  );
};

export default DateInfo;