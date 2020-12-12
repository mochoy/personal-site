import React from 'react';
import { BeatLoader } from "react-spinners";

const Loading = props => {
  const { isLoading } = props;

  return (
    <div id="Loading">
      <div className="flex-container-horizontally-center">
        <BeatLoader loading={!!isLoading ? isLoading : true}/>
      </div>
      <p className="text-center">Loading...</p>
    </div>
  );
};

export default Loading;