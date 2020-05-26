import React from "react";
import { NavLink } from "react-router-dom";
import "../../styling/navbar.css";
import { Nav, NavItem } from "reactstrap";

const SignedInLinks = () => {
  return (
    <Nav className="mr-auto" navbar>

      <NavItem>
        <NavLink to="/qa" className="tag">
          Question Board
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to="/engineers" className="tag">
          Spotlight
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to="/accountPage" className="tag">
          Account
        </NavLink>
      </NavItem>

    </Nav>
  );
};

export default SignedInLinks;
