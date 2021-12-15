// File for all/most React GA stuff 
import ReactGA from 'react-ga';


// Init React GA, called in app onComponentMount
// The GA tracking id/REACT_APP_GA_KEY can be found here:
// https://analytics.google.com/analytics/web/#/a128598718w187666651p184425591/admin/property/settings
// Admin > Property Settings > Basic Settings > Tracking Id
ReactGA.initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_KEY, {
    debug: false,       // Set to fale to disable logs
    testMode: true,    // Uncomment/set to false if dont want data sent to ga
    // siteSpeedSampleRate: 100
  });

  // ReactGA.pageview(window.location.pathname + window.location.search);
}


// Custom GA stuff that will be tacked onto ReactGA that gets passed through contexts
ReactGA.custom = {
  // Called from VisibilitySensor onChange, if isVisible === true, then that 
  // section has been visited, so send an event to GA via GA event
  sectionVisited: (isVisible, section, isBlog) => {
    if (isVisible) {
      ReactGA.event({
        category: `${!!isBlog ? "Blog" : "Main"} Section`,
        action: "Visited",
        label: section,
        nonInteraction: true
      });
    }
  },

}

export default ReactGA;