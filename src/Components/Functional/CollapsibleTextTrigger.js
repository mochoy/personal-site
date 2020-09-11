import React from 'react';

import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';


const CollapsibleTextTrigger = props => {
  const { isExpanded, 
    setIsExpanded, 
    
    children, 

    onClick,
    
    containerClassName, 
    containerStyle } = props;

  return (
    <div className={`CollapsibleTextTrigger ${containerClassName} mouse-on-hover flex-container-vertically-center`}
      onClick={e => {
        if (!!onClick) onClick(!isExpanded)

        setIsExpanded(prev => !prev)
      }}
      style={containerStyle}
    >
      {children}

      { isExpanded && 
        <ArrowDropUp/>
      }

      { !isExpanded && 
        <ArrowDropDown/>
      }
      
    </div>
  )
}

export default CollapsibleTextTrigger;