import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './navbar.css'


const NavbarComponent = () => {
  return (
      <Navbar className="navbar" bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/">ICAC3N-21</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="nav_coll" id="basic-navbar-nav">
            <Nav className="me-auto">

              
              <NavDropdown style={{marginLeft:"10px"}} title="About Us" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Galgotias Educational Institituion (GEI)</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  About GCET
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  About CSE Department
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link style={{marginLeft:"10px"}} href="#link1">Impotant Dates</Nav.Link>
              <Nav.Link style={{marginLeft:"10px"}} href="#link2">Submission Guidelines</Nav.Link>
              

              <NavDropdown style={{marginLeft:"10px"}} title="Committee" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Organising Committee
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Technical Program Committee
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Advisory Board
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link style={{marginLeft:"10px"}} href="#link3">Speakers</Nav.Link>
              <Nav.Link style={{marginLeft:"10px"}} href="#link4">Call for Papers</Nav.Link>

              <Nav.Link style={{marginLeft:"10px"}} href="#link5">Register</Nav.Link>
              <Nav.Link style={{marginLeft:"10px"}} href="#link6">Contact Us</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavbarComponent;
