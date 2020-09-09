import React, { useContext } from 'react';
import GitHubCalendar from 'react-github-calendar';

import { ReactGACtx } from '../App';


const GithubStats = props => {

  return (
    <div id="GithubStats">

      {/* Green boxes */}
      <div className="horizontally-center">
        <h2 className="text-center">
          GitHub Stats
        </h2>

        <div className="flex-container-horizontally-center">
          <GitHubCalendar username="mochoy"/>
        </div>

        {/* Stats */}
        <div className="flex-container-horizontally-center">
          <a href="https://github.com/anuraghazra/github-readme-stats">
            <img id="gh-stats-img"
              align="center" 
              alt="gh-stats-img"
              src="https://github-readme-stats.anuraghazra1.vercel.app/api?username=mochoy&show_icons=true&count_private=true&hide=issues&include_all_commits=true" 
            />
          </a>  
          <a href="https://github.com/anuraghazra/github-readme-stats">
            <img id="top-languages-img"
              align="center" 
              alt="top-languages-img"
              src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=mochoy&layout=compact" 
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default GithubStats;