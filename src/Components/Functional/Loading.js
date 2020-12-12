import React from 'react';
import { BeatLoader } from "react-spinners";

/**
 * Component that renders loader and loading txt. Can be rendered conditionally
 * in it's parent component or can pass in isLoading param
 * 
 * @param {Boolean} isLoading: true to render loading stuff, else false 
 * 
 * @return {JSX} component with loader and loading txt
 */
const Loading = props => {
  const { isLoading } = props;

  if (typeof isLoading !== 'undefined' ? isLoading : true) {
    return (
      <div id="Loading">
        <div className="flex-container-horizontally-center">
          <BeatLoader loading={!!isLoading ? isLoading : true}/>
        </div>
        <p className="text-center">Loading...</p>
      </div>
    );
  } else {
    return (
      <div id="Loading"></div>
    );
  }
  
};

export default Loading;