import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Teachers</NavLink>
      </li>
      <li>
        <NavLink to="/qa">Question Board</NavLink>
      </li>
      <li>
        <NavLink to="/progress">Lesson Progress</NavLink>
      </li>
      <li>
        <NavLink to="/engineers">Engineer Profiles</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>

      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
