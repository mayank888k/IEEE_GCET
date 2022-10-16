import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './navbar.css'
import newgif from "./images/new_red.gif"
import PopupComponent from "./PopupSection/PopupComponent";


const NavbarComponent = () => {
  return (
      <Navbar className="navbar" bg="white" expand="lg">
        <Container>
          
              {/* <Navbar.Brand href="/">ICAC3N-22</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="nav_coll" id="basic-navbar-nav">
            <Nav>
              <NavDropdown style={{marginLeft:"-10px",fontWeight:"bolder"}} title="ICAC3N" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">
                    ICAC3N-22
                    <img style={{marginBottom:"20px"}} src={newgif} alt="" />
                  </NavDropdown.Item>
                  <NavDropdown.Item href="ICAC3N21">
                    ICAC3N-21
                  </NavDropdown.Item>
                  <NavDropdown.Item href="ICAC3N20">
                    ICAC3N-20
                  </NavDropdown.Item>
                  <NavDropdown.Item href="ICAC3N18">
                    ICAC3N-18
                  </NavDropdown.Item>
                </NavDropdown>
              <NavDropdown style={{marginLeft:"10px"}} title="About Us" id="basic-nav-dropdown">
                <NavDropdown.Item href="aboutGEI">About Galgotias Educational Institituion (GEI)</NavDropdown.Item>
                <NavDropdown.Item href="aboutGCET"> About GCET </NavDropdown.Item>
                <NavDropdown.Item href="aboutCSE"> About CSE Department </NavDropdown.Item>
              </NavDropdown>

              <NavLink style={{marginLeft:"10px"}} className="nav-link" to="/dates">Important Dates</NavLink>
              <NavLink style={{marginLeft:"10px"}} className="nav-link" to="/guidelines">Submission Guidelines</NavLink>
              

              <NavDropdown style={{marginLeft:"10px"}} title="Committee" id="basic-nav-dropdown">
                <NavDropdown.Item href="organisingCommittee"> Organising Committee </NavDropdown.Item>
                <NavDropdown.Item href="technicalCommittee"> Technical Program Committee </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="advisoryBoard"> Advisory Board </NavDropdown.Item>
              </NavDropdown>

              <NavLink style={{marginLeft:"10px"}} className="nav-link" to="speakers">Speakers</NavLink>
              <NavLink style={{marginLeft:"10px"}} className="nav-link" to="callforpapers">Call for Papers</NavLink>

              <NavLink style={{marginLeft:"10px"}} className="nav-link" to="registration">Register</NavLink>
              <NavLink style={{marginLeft:"10px"}} className="nav-link" to="contactus">Contact Us</NavLink>
              
              {/* <PopupComponent /> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavbarComponent;
