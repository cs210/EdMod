import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import TeacherDashboard from "./components/Dashboards/TeacherDashboard/TeacherDashboard.js";
import QuestionDashboard from "./components/Dashboards/QuestionDashboard/QuestionDashboard.js";
import ProgressDashboard from "./components/Dashboards/ProgressDashboard/ProgressDashboard.js";
import EngineerProfileDashboard from "./components/Dashboards/EngineerProfileDashboard/EngineerProfileDashboard.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={TeacherDashboard} />
            <Route path="/qa/:q_id" render={(props) => <QuestionDashboard {...props}/>} />
            <Route path="/progress" component={ProgressDashboard} />
            <Route path="/engineers" component={EngineerProfileDashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
