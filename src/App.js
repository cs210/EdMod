import React, { useState } from "react";
import { HashRouter, BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Routes from "./components/Routing/Routes.js";
import NavBar from "./components/layout/Navbar";
import firebase from "./config/firebase.js";
import ReactGA from 'react-ga';

const App = (props) => {
  ReactGA.initialize('UA-165948384-1'); // Google Analytics
  ReactGA.pageview("app startup pageview");
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    </HashRouter>
  );
};
export default App;
