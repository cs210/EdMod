import React, { Component } from "react";
import StudentSummary from "./StudentSummary";

const StudentList = () => {
  return (
    <div className="project-list section">
      <StudentSummary />
      <StudentSummary />
      <StudentSummary />
      <StudentSummary />
    </div>
  );
};

export default StudentList;
