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

// Init firebase app and connect to db. Returns ref to db
const init = (ref) => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  
  return firebase.database().ref(ref);
};

export { init };
