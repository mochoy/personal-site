import React, { createContext, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Nav from '../Nav';
import Main from '../Main';
import Blog from '../Blog';
import BlogDetail from '../Blog/Detail';
import NotFound from '../NotFound';
import Footer from '../Footer';

import ReactGA from '../../services/reactGA';

import './index.css';





export const ReactGACtx = createContext(ReactGA);


//
// Firebase stuff
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

firebase.initializeApp(firebaseConfig);


const App = () => {
  const db = firebase.database().ref();

  useEffect(() => {
    ReactGA.initGA();

    db.on('value', snapshot => {
      console.log(snapshot.val())
    });
  }, []);

  return (
    <ReactGACtx.Provider value={ReactGA}>
      <BrowserRouter onUpdate={() => ReactGA.pageview(window.location.hash)}>
        <div className="App">
          <Nav/>
          
          <Switch>
            {/* Route to main */}
            <Route 
              exact path={["/", "/home", "/about", "/experience", "/projects"]}
              render = {(props) => (
                <Main {...props}/>
              )} 
            />

            {/* Route to blog */}
            <Route 
              exact path="/blog" 
              render = {(props) => (
                <Blog {...props}/>
              )} 
            />

            {/* Route to blog detail */}
            <Route 
              exact path="/blog/:id" 
              render = {(props) => (
                <BlogDetail {...props}/>
              )} 
            />

            {/* Route to 404 Not Found */}
            <Route 
              exact path="/404" 
              render = {(props) => (
                <NotFound {...props}/>
              )} 
            />

            {/* Redirect random/broken paths to main */}
            <Route 
              path="/*" 
              render = {() => (
                <Redirect to="/" />
              )} 
            />

          </Switch>

          <Footer/>

        </div>
      </BrowserRouter>
    </ReactGACtx.Provider>
  );
}

export default App;
