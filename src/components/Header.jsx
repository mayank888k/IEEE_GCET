import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./images/logo.png"
import NavbarComponent from "./Navbar";
import newgif from "./images/new_red.gif"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dark } from "@mui/material/styles/createPalette";

const Header = () => {
  const notify = () => toast.error('✨  Conference will be held in blended mode (online and offline)', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:"colored"
    });
    
    // useEffect(() => {
    //   notify()
    // })
    

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
      <div className="date" >
        <p className="animate-charcter">
            <strong>
            Conference Will Be Held In Blended Mode (Online and Offline Both)
            </strong>
        </p>
    </div>
      <div className="date">
        <p>
            <strong>16th - 17th December, 2022</strong>
        </p>
    </div>
    <div className="recNum">
      <p >IEEE Conference Record Number <strong style={{color:"#ff7986"}}>#56670</strong></p>
    </div>
    </div>

    <NavbarComponent />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{width:"600px"}}
      />

    </div>
  );
};

export default Header;
