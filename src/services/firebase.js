// File for all/most firebase stuff

import firebase from 'firebase/app';
import 'firebase/database';


// Get config info here: https://firebase.google.com/docs/web/setup#add_firebase_to_your_app
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_API,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Init firebase app if no app init yet
const init = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  
};

/**
 * Get ref to db at path. Handles app init if not already init. bascially just 
 * a wrapper around https://firebase.google.com/docs/reference/js/firebase.database.Database#ref
 * 
 * @param {string} path: path to location in db. Can omit if want ref to 
 * entire db
 * 
 * @return {Object} return val of db.ref(), a ref pointing to db location 
 */
const dbRef = path => {
  // If no app init yet, init app first
  if (firebase.apps.length === 0) {
    init();
  }

  return firebase.database().ref(path);
}

export { init, dbRef };
