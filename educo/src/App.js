import React, { useState } from "react";
import { HashRouter, BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Routes from "./components/Routing/Routes.js";
import NavBar from "./components/layout/Navbar";
import firebase from "./config/firebase.js";
import ReactGA from 'react-ga';
// import TeacherDashboard from "./components/Dashboards/TeacherDashboard/TeacherDashboard.js";
// import QuestionDashboard from "./components/Dashboards/QuestionDashboard/QuestionDashboard.js";
// import ProgressDashboard from "./components/Dashboards/ProgressDashboard/ProgressDashboard.js";
// import EngineerProfileDashboard from "./components/Dashboards/EngineerProfileDashboard/EngineerProfileDashboard.js";
// import EngineerProfileDerpy from "./components/Profiles/EngineerProfileDerpy.js";
// import SignIn from "./components/auth/SignIn.js";
//
//class App extends Component {
const App = (props) => {
  ReactGA.initialize('UA-165948384-1'); // Google Analytics
  ReactGA.pageview("app startup pageview");
  return (
    // <SignIn />
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    </HashRouter>
  );
};
export default App;
