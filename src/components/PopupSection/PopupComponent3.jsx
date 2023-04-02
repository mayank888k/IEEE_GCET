import React, { useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popupComponent.css'
import new_icon from './new_red.gif';

export default () => {

  return (
  
    <Popup trigger=
    {<button className="popup_btn" id="pop_btn3">

      <div className="imp_msg_header" style={{display:"flex", fontWeight:"bolder"}}>
        <div className="title-word title-word-2">
            Day 2:Inauguration Link
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

            <div className="header_popup"> Day 2: Inauguration Activities </div>
            
            <div className="content_popup"  style={{fontWeight:"900"}}>
            
        
                <p className="has-text-align-justify2">
                        🗓&nbsp;&nbsp; Day 2&nbsp;&nbsp;:<span style={{color:"blue"}}>Inauguration Date:  17th Dec, 2022</span> 
                    <br /> <br />

                        ⏰&nbsp;&nbsp; Time&nbsp;&nbsp;:<span style={{color:"blue"}}>  10:00 AM onwards</span>
                    <br /> <br />

                        🏛 &nbsp;&nbsp; Inauguration&nbsp;&nbsp;:<span style={{color:"blue"}}> Online through Zoom Platform</span>

                    <br /> <br />

                        🎦&nbsp;&nbsp;  Zoom Link &nbsp;:&nbsp;
                        <a style={{width:"auto"}} className='pop2a' href="https://us06web.zoom.us/j/81054871944?pwd=N2lhYmhtYTFBd0w2bE9waDN3K3pOUT09">
                            https://us06web.zoom.us/j/81054871944?pwd=N2lhYmhtYTFBd0w2bE9waDN3K3pOUT09
                        </a>
                    <br /> <br />

                        🎦&nbsp;&nbsp;  You Tube Live &nbsp;:&nbsp;
                        <a className='pop2a' href="https://youtu.be/xy1XgxR5r0E">
                            https://youtu.be/xy1XgxR5r0E
                        </a>
                    <br /> <br />

                        🎦&nbsp;&nbsp;  Valedictory Session &nbsp;:&nbsp;
                        <a className='pop2a' href="https://us06web.zoom.us/j/86534916269?pwd=VTZLSFYraWxmSTh1SFM3b2NjVHBlZz09">
                        https://us06web.zoom.us/j/86534916269?pwd=VTZLSFYraWxmSTh1SFM3b2NjVHBlZz09
                        </a>

                </p>
            </div>
      </div>
    )}
  </Popup>
  );
};