import React, { useState } from "react";
import Educo from "../../images/educo.png";
import "../../styling/navbar.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/EdMod">
          <img src={Educo} alt="logo" className="logo" />
        </NavbarBrand>

        <Nav navbar>
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
      </Navbar>
  );
};

export default NavBar;
