import React, { useContext } from 'react';

import { ReactGACtx } from '../App';

import hweResumePdf from '../../assets/documents/Resume Monty Choy - Electrical Engineering.pdf';
import sweResumePdf from '../../assets/documents/Resume Monty Choy - Software Engineering.pdf';
import everythingResumePdf from '../../assets/documents/Resume Monty Choy - Everything.pdf';

const resumesData = [
  {
    resume: hweResumePdf,
    name: "Hardware/ Electrical Engineering"
  },
  // {
  //   resume: hweResumePdf,
  //   name: "Electrical Engineering - IC Design/ Verification"
  // },
  {
    resume: sweResumePdf,
    name: "Software Engineering"
  },
  // {
  //   resume: hweResumePdf,
  //   name: "Software Engineering - Web Development"
  // },
  // {
  //   resume: hweResumePdf,
  //   name: "Software Engineering - Embedded Systems"
  // },
  {
    resume: everythingResumePdf,
    name: "'Everything'"
  }
]

const Resumes = props => {
  const ReactGA = useContext(ReactGACtx);


  return (
    <div id="Resumes">
      <h2 className="text-center">Resumes</h2>
      <div className="flex-container-horizontally-center">
        { resumesData.map((resumeData, key) => {
          const { resume, name } = resumeData;

          return (
            <a className="mouse-on-hover resume-link no-style-link grow-on-hover underline-on-hover" 
              href = {resume} 
              target = "_blank"
              rel="noopener noreferrer"
              key={key}
              onClick={() => {
                // Send to analytics
                ReactGA.event({
                  category: 'Resume',
                  action: "Viewed",
                  label: name
                });
              }}
              onMouseEnter={() => {
                // Send to analytics
                ReactGA.event({
                  category: 'Resume',
                  action: "Hover",
                  label: name
                });
              }}
            >
              <img 
                className="resume-icon horizontally-center" 
                src={require(`assets/images/icons/pdf.svg`)} 
                alt={"resume-icon"}
              />
              <p className="text-center">{name}</p>
            </a>
          ) })
        }

        
        
      </div>


    </div>
  )
};

export default Resumes;