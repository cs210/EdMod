import React from "react";
import StudentList from "./StudentList";

const divStyle = {
  marginTop: "30px",
  marginLeft: "30px",
  marginRight: "30px",
  padding: "10px",
  border: "2px solid lightgrey",
  borderRadius: "10px"
};

const StudentSummary = () => {
  return (
    <div className="col" style={divStyle}>
      <div className="col">
        <span>Student Name</span>
        <p>School</p>
      </div>
    </div>
  );
};

export default StudentSummary;
