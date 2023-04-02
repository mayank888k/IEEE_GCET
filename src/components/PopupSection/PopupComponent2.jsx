import React, { useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popupComponent.css'
import new_icon from './new_red.gif';

export default () => {

  return (
  
    <Popup trigger=
    {<button className="popup_btn" id="pop_btn2">

      <div className="imp_msg_header" style={{display:"flex", fontWeight:"bolder"}}>
        <div className="title-word title-word-1">
            Day 1:Inauguration Link
        </div>
        
        {/* <img src={new_icon} style={{marginBottom:"10px"}} /> */}
      </div>

    </button>}
    position="top left"
    modal
    >
    
    {close => (
        <div className="mdl">
            <button className="close" onClick={close}>
            &times;
            </button>

            <div className="header_popup"> Day 1: Inauguration Activities </div>
            
            <div className="content_popup" style={{fontWeight:"900"}}>
                    🗓&nbsp;&nbsp; Day 1 &nbsp;&nbsp;: <span style={{color:"blue"}}>Inauguration Date:  16th Dec, 2022 </span> 
                <br /> <br />

                    ⏰&nbsp;&nbsp;<strong> Time </strong>&nbsp;&nbsp;:  <span style={{color:"blue"}}> 09:30 AM onwards</span> 
                <br /> <br />

                    🏛&nbsp;&nbsp;<span> Inauguration Venue </span> &nbsp;&nbsp; :<span style={{color:"blue"}}> D Block Auditorium, GCET, Greater Noida </span>
                <br /> <br />

                    🎦&nbsp;&nbsp;<span> Zoom Link </span>  &nbsp;:&nbsp;
                    <a style={{width:"auto"}} className='pop2a' href="https://us06web.zoom.us/j/87127027282?pwd=cWl1Y0JuWExJVDFhcm9NSmpPci93UT09">
                        https://us06web.zoom.us/j/87127027282?pwd=cWl1Y0JuWExJVDFhcm9NSmpPci93UT09
                    </a>
                <br /> <br />

                    🎦&nbsp;&nbsp;<span>  You Tube Live </span> &nbsp;:&nbsp;
                    <a className='pop2a' href="https://youtu.be/xy1XgxR5r0E">
                        https://youtu.be/xy1XgxR5r0E
                    </a>
                <br /> <br />

            </div>
      </div>
    )}
  </Popup>
  );
};