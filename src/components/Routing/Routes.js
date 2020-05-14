import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "../layout/Navbar";
import TeacherDashboard from "../Dashboards/TeacherDashboard/TeacherDashboard.js";
import QuestionDashboard from "../Dashboards/QuestionDashboard/QuestionDashboard.js";
import ProgressDashboard from "../Dashboards/ProgressDashboard/ProgressDashboard.js";
import EngineerProfileDashboard from "../Dashboards/EngineerProfileDashboard/EngineerProfileDashboard.js";
import EngineerProfileDerpy from "../Profiles/EngineerProfileDerpy.js";

const Routes = (props) => {
  return (
    <Switch>
      {/* // <Route exact path="/teachers" component={TeacherDashboard} /> */}
      <Route
        path="/qa/:q_id"
        render={(props) => <QuestionDashboard {...props} />}
      />
      <Redirect path="/qa" to="/qa/KZgPCyLfIQagMBGlIcWw" />
      {/* // <Route path="/progress" component={ProgressDashboard} /> */}
      <Route path="/engineers" component={EngineerProfileDashboard} />
      <Route path="/engineers/derpy" component={EngineerProfileDerpy} />
    </Switch>
  );
};

export default Routes;
