import React, { useContext } from 'react';
import GitHubCalendar from 'react-github-calendar';

import { ReactGACtx } from '../App';


const GithubStats = props => {
  const ReactGA = useContext(ReactGACtx);

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
          {/* gh stats */}
          <a href="https://github.com/anuraghazra/github-readme-stats"
            onClick={ () => {
              ReactGA.event({
                category: 'Github Stats',
                action: "Clicked",
                label: "Github stats"
              })
            }}
          >
            <img id="gh-stats-img"
              align="center" 
              alt="gh-stats-img"
              src="https://github-readme-stats.anuraghazra1.vercel.app/api?username=mochoy&show_icons=true&count_private=true&hide=issues&include_all_commits=true" 
            />
          </a> 

          {/* Language stats */}
          <a href="https://github.com/anuraghazra/github-readme-stats"
            onClick={ () => {
              ReactGA.event({
                category: 'Github Stats',
                action: "Clicked",
                label: "Language stats"
              })
            }}
          >
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