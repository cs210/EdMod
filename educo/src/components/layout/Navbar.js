import React, { useState } from "react";
import SignedInlinks from "./SignedInLinks";
import SignedOutlinks from "./SignedOutLinks";
import Educo from "../../images/educo.png";
import "../../styling/navbar.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={Educo} alt="logo" className="logo" />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} className="toggler" />

        <Collapse isOpen={isOpen} navbar>
          <SignedInlinks />
          {/* <SignedOutlinks /> */}
          <button
            className={isOpen ? "logout-open" : "logout"}
            id="logout-hover"
          >
            Logout
          </button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
