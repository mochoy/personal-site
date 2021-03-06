import React, { createContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database';

import Nav from '../Nav';
import Main from '../Main';
import Blog from '../Blog';
import BlogDetail from '../Blog/Detail';
import NotFound from '../NotFound';
import Footer from '../Footer';

import ReactGA from '../../services/reactGA';
import { firebaseConfig } from '../../services/firebase';


import './index.css';


firebase.initializeApp(firebaseConfig);

export const ReactGACtx = createContext(ReactGA);
export const FirebaseCtx = createContext(firebase.database());


const App = () => {
  useEffect(() => {
    ReactGA.initGA();
  }, []);

  return (
    <ReactGACtx.Provider value={ReactGA}>
      <FirebaseCtx.Provider value={firebase.database()}>
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
      </FirebaseCtx.Provider>
    </ReactGACtx.Provider>
  );
}

export default App;
