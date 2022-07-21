import { render } from "@testing-library/react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logout from "./Logout";

function BasicExample({ currentUser }) {
  const [user, setUser] = useState("");

  if (currentUser) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">A Step Above</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/offerings">
                Offerings
              </Nav.Link>
              <Nav.Link as={Link} to="/teachers">
                Teachers
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link as={Link} to="/logout">
            Logout
          </Nav.Link>
        </Container>
      </Navbar>
    );
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">A Step Above</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/offerings">
              Offerings
            </Nav.Link>
            <Nav.Link as={Link} to="/teachers">
              Teachers
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <NavDropdown title="Sign In/Sign Up" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/signin">
                Sign In
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/signup">
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
