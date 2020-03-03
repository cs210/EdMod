import React, { Component } from "react";
import StudentSummary from "./StudentSummary";

class TeacherDashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <StudentSummary />
          <StudentSummary />
          <div className="w-100"></div>
          <StudentSummary />
          <StudentSummary />
        </div>
      </div>
    );
  }
}

export default TeacherDashboard;
