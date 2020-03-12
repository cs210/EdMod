import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Routes from './components/Routing/Routes.js';
import NavBar from "./components/layout/Navbar";
import TeacherDashboard from "./components/Dashboards/TeacherDashboard/TeacherDashboard.js";
import QuestionDashboard from "./components/Dashboards/QuestionDashboard/QuestionDashboard.js";
import ProgressDashboard from "./components/Dashboards/ProgressDashboard/ProgressDashboard.js";
import EngineerProfileDashboard from "./components/Dashboards/EngineerProfileDashboard/EngineerProfileDashboard.js";
import EngineerProfileDerpy from './components/Profiles/EngineerProfileDerpy.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
