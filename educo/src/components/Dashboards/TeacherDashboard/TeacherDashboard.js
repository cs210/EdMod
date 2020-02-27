import React, { Component } from "react";
import StudentList from "./StudentList";
class TeacherDashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div classname="row">
          <div classname="col s12 m6">
            <StudentList />
          </div>
          <div classname="col s12 m5 offset-m1"></div>
        </div>
      </div>
    );
  }
}

export default TeacherDashboard;
