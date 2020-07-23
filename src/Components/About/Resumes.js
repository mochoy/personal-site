import React from 'react';

import hweResumePdf from '../../assets/documents/Resume Monty Choy - Hardware Engineering.pdf';

const Resumes = props => {

  return (
    <div id="Resumes">
      <h2 className="text-center">Resumes</h2>
      <div className="flex-container-horizontally-center">

        <a className="mouse-on-hover resume-link-container" 
          href = {hweResumePdf} 
          target = "_blank"
        >
          <img 
            className="resume-icon grow-on-hover horizontally-center" 
            src={require(`assets/images/icons/pdf.svg`)} 
            alt={"resume-icon"}
          />
          <p className="text-center">Hardware Engineering</p>
        </a>
        
      </div>


    </div>
  )
};

export default Resumes;