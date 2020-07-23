import React from 'react';

const Resumes = props => {

  return (
    <div id="Resumes">
      <h2 className="text-center">
            Resumes
            <div className="flex-container-center">
              <div>
                <img 
                  className="grow-on-hover resume-icon" 
                  src={require(`assets/images/icons/pdf.svg`)} 
                  alt={"resume-icon"}
                />
                <p className="center-text"></p>
              </div>
              
            </div>
          </h2>
    </div>
  )
};

export default Resumes;