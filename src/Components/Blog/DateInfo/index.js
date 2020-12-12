import React from 'react';

import './index.css';

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