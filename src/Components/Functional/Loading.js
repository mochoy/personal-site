import React from 'react';
import { BeatLoader } from "react-spinners";

const Loading = props => {
  return (
    <div id="Loading">
      <div className="flex-container-horizontally-center">
        <BeatLoader loading={true}/>
      </div>
      <p className="text-center">Loading...</p>
    </div>
  );
};

export default Loading;