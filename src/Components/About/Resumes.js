import React from 'react';

import hweResumePdf from '../../assets/documents/Resume Monty Choy - Hardware Engineering.pdf';


const resumesData = [
  {
    resume: hweResumePdf,
    name: "Hardware Engineering"
  },
  {
    resume: hweResumePdf,
    name: "Software Engineering"
  },
  {
    resume: hweResumePdf,
    name: "Software Engineering - Web Development"
  },
  {
    resume: hweResumePdf,
    name: "Software Engineering - Embedded Systems"
  },
  {
    resume: hweResumePdf,
    name: "'Everything'"
  }
]

const Resumes = props => {

  return (
    <div id="Resumes">
      <h2 className="text-center">Resumes</h2>
      <div className="flex-container-horizontally-center">
        {
          resumesData.map((resumeData, key) => {
            const { resume, name } = resumeData;

            return (
              <a className="mouse-on-hover resume-link" 
                href = {resume} 
                target = "_blank"
                rel="noopener noreferrer"
                key={key}
              >
                <img 
                  className="resume-icon grow-on-hover horizontally-center" 
                  src={require(`assets/images/icons/pdf.svg`)} 
                  alt={"resume-icon"}
                />
                <p className="text-center">{name}</p>
              </a>
            )
          })
        }

        
        
      </div>


    </div>
  )
};

export default Resumes;