import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./images/logo.png"
import NavbarComponent from "./Navbar";
import newgif from "./images/new_red.gif"

const Header = () => {
  return (
    <div className="header">

    <div className="head">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="title">
        <NavLink exact to="/">
          <h1>
            4th International Conference on Advances in Computing, Communication Control and Networking
            (ICAC3N–22)
            <img style={{marginBottom:"20px"}} src={newgif} alt="" />
          </h1>
          </NavLink>
      </div>
      <div className="date">
        <p>
            16th - 17th December, 2022
        </p>
    </div>
    <div className="recNum">
      <p >IEEE Conference Record Number <strong style={{color:"red"}}>#56670</strong></p>
    </div>
    </div>

    


    <NavbarComponent />

    </div>
  );
};

export default Header;
