import React, { useContext } from 'react';
// import GitHubCalendar from 'react-github-calendar';

import { ReactGACtx } from '../App';


const GithubStats = props => {
  const ReactGA = useContext(ReactGACtx);

  return (
    <div id="GithubStats">

      <div className="horizontally-center">
        <h2 className="text-center"
          style={{ marginBottom: "0em" }}
        >
          GitHub Stats
        </h2>
        <p className="text-center"
          style={{ marginTop: "0em", marginBottom: "2em", fontSize: "0.8em" }}
        >
          (the most important info)
        </p>

        {/* Green boxes */}
        {/*
        <div className="flex-container-horizontally-center">
          <GitHubCalendar username="mochoy"/>
        </div>
        */}

        {/* Stats */}
        <div className="flex-container-horizontally-center"
          style={{ marginTop: "1em" }}
        >
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