import React from "react";
import StudentList from "./StudentList";

const StudentSummary = () => {
  return (
    <div className="card z-depth-0 student-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Student Name</span>
        <p>School</p>
      </div>
    </div>
  );
};

export default StudentSummary;
