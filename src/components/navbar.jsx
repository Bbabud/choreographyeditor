import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

//stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        Coreography editor{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="https://github.com/Bbabud/choreographyeditor">
            GitHub
          </Nav.Link>
          <NavDropdown title="More info " id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="https://www.linkedin.com/in/babud-bence-25568714a/"
              target="_blank"
            >
              LinkedIn
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
