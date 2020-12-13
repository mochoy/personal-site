import ReactGA from 'react-ga';

ReactGA.initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_KEY, {
    debug: false,       // Set to fale to disable logs
    testMode: true,    // Uncomment/set to false if dont want data sent to ga
    // siteSpeedSampleRate: 100
  });

  ReactGA.pageview(window.location.pathname + window.location.search);
}


// Custom GA stuff that will be tacked onto ReactGA that gets passed through contexts
ReactGA.custom = {
  // Called from VisibilitySensor onChange, if isVisible === true, then that 
  // section has been visited, so send an event to GA via GA event
  sectionVisited: (isVisible, section) => {
    if (isVisible) {
      ReactGA.event({
        category: 'Section',
        action: "Visited",
        label: section,
        nonInteraction: true
      });
    }
  }  
}

export default ReactGA;