import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "../layout/Navbar";
import QuestionDashboard from "../Dashboards/QuestionDashboard/QuestionDashboard.js";
import EngineerProfileDashboard from "../Dashboards/EngineerProfileDashboard/EngineerProfileDashboard.js";
import AccountPage from "../Dashboards/AccountPage/AccountPage.js";
import AccountFBPage from "../Dashboards/AccountPage/AccountFirebasePage.js";

const Routes = (props) => {
  return (
    <Switch>
      <Route
        path="/qa/:q_id"
        render={(props) => <QuestionDashboard {...props} />}
      />
      <Redirect path="/qa" to="/qa/KZgPCyLfIQagMBGlIcWw" />
      <Route path="/engineers" component={EngineerProfileDashboard} />
      <Route path="/accountPage" component={AccountFBPage} />
    </Switch>
  );
};

export default Routes;
