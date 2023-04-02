import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./images/logo.png"
import NavbarComponent from "./Navbar";
import newgif from "./images/new_red.gif"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dark } from "@mui/material/styles/createPalette";
import PopupComponent2 from "./PopupSection/PopupComponent2";
import PopupComponent3 from "./PopupSection/PopupComponent3";

const Header = () => {

  // Popup Message 
  // useEffect(() => {
  //   document.getElementById('pop_btn').click();
  // }, [])
  

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
            5th International Conference on Advances in Computing, Communication Control and Networking
            (ICAC3N–23)
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

      <div className='line'>
        <h2 className='pop-outin'>
          <a className = 'pop_a' href="https://icac3n.in/ICAC3N_2023/ICAC3N 2023_FPage.pdf" target="_blank">
            Programme Schedule || 5th IEEE ICAC3N-23 || 15th & 16th December 2023
            <img style={{marginBottom:"20px"}} src={newgif} alt="" />
          </a>
        </h2>
      </div>

      {/* Inauguration Part */}
      {/* <div className ='inog'>
        <h2 className ='title_d'>
         
          <PopupComponent2 />
          &nbsp;&nbsp;&nbsp; || &nbsp;&nbsp;&nbsp;

          <PopupComponent3 />
          &nbsp;&nbsp;&nbsp; || &nbsp;&nbsp;&nbsp;

          <a className="title-word title-word-3" href="https://icac3n.in/IEEEFORMAT/TechnicalSessionDetailsZoomLink.pdf" target="_blank">
          Technical Session Details Link
          </a>
            
        </h2>

      </div> */}

      {/* <div className="recNum">
        <p >IEEE Conference Record Number <strong style={{color:"#ff7986"}}>&nbsp;#56670</strong>&nbsp; & &nbsp;ISBN :<strong style={{color:"#ff7986"}}>&nbsp;978-1-6654-7436-8</strong></p>
      </div> */}

      <div className="date">
        <p>
            <strong>15th - 16th December, 2023</strong>
        </p>
      </div>
    </div>

    <NavbarComponent />
    
    </div>
  );
};

export default Header;













// const notify = () => toast.error('✨  Conference will be held in blended mode (online and offline)', {
//   position: "top-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme:"colored"
//   });
  
  // useEffect(() => {
  //   notify()
  // })






{/* <ToastContainer
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
      /> */}
