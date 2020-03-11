import React from "react";
import { NavLink } from "react-router-dom";
import "../../styling/navbar.css";
import { Nav, NavItem } from "reactstrap";

const SignedInLinks = () => {
  return (
    <Nav className="mr-auto" navbar>
      <NavItem>
        <NavLink to="/teachers/" className="tag">
          Teachers
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to="/qa" className="tag">
          Question Board
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to="/progress" className="tag">
          Lesson Progress
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to="/engineers" className="tag">
          Engineer Profiles
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SignedInLinks;
