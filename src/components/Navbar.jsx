import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './navbar.css'


const NavbarComponent = () => {
  return (
      <Navbar className="navbar" bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/">ICAC3N-22</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="nav_coll" id="basic-navbar-nav">
            <Nav className="me-auto">

              
              <NavDropdown style={{marginLeft:"10px"}} title="About Us" id="basic-nav-dropdown">
                <NavDropdown.Item href="aboutGEI">About Galgotias Educational Institituion (GEI)</NavDropdown.Item>
                <NavDropdown.Item href="aboutGCET">
                  About GCET
                </NavDropdown.Item>
                <NavDropdown.Item href="aboutCSE">
                  About CSE Department
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink style={{marginLeft:"10px"}} className="nav-link" to="/dates">Impotant Dates</NavLink>
              <NavLink style={{marginLeft:"10px"}} className="nav-link" to="/guidelines">Submission Guidelines</NavLink>
              

              <NavDropdown style={{marginLeft:"10px"}} title="Committee" id="basic-nav-dropdown">
                <NavDropdown.Item href="organisingCommittee">
                  Organising Committee
                </NavDropdown.Item>
                <NavDropdown.Item href="technicalCommittee">
                  Technical Program Committee
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="advisoryBoard">
                  Advisory Board
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink style={{marginLeft:"10px"}} className="nav-link" to="speakers">Speakers</NavLink>
              <NavLink style={{marginLeft:"10px"}} className="nav-link" to="callforpapers">Call for Papers</NavLink>

              <NavLink style={{marginLeft:"10px"}} className="nav-link" to="registration">Register</NavLink>
              <NavLink style={{marginLeft:"10px"}} className="nav-link" to="contactus">Contact Us</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavbarComponent;
