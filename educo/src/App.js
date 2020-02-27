import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import TeacherDashboard from "./components/Dashboards/TeacherDashboard/TeacherDashboard.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={TeacherDashboard} />
            <Route path="/progress" component={TeacherDashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
