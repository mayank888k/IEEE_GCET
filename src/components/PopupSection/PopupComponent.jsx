import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./popupComponent.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import bell from "./bell.png";
import new_icon from "./new_red.gif";

export default () => {
  return (
    <Popup
      trigger={
        <button className="popup_btn" id="pop_btn">
          <div className="imp_msg_header" style={{ display: "flex" }}>
            <div className="img_msg">Message</div>

            <img src={new_icon} style={{ marginBottom: "10px" }} />
          </div>
        </button>
      }
      position="top left"
      modal
    >
      {(close) => (
        <div className="mdl">
          <button className="close" onClick={close}>
            &times;
          </button>

          <div className="header_popup"> Important Message </div>

          <div className="content_popup">
            <p class="has-text-align-justify">
              1. 4th IEEE ICAC3N-22 Proceeding is available Online now on
              IEEE Xplore💫 
              &nbsp;&nbsp;
              <span>
              <br /> Link :{" "}
              </span>{" "}
              &nbsp;&nbsp;
              <a
                style={{ width: "auto" }}
                className="pop2a"
                href="https://ieeexplore.ieee.org/xpl/conhome/10073967/proceeding"
              >
                https://ieeexplore.ieee.org/xpl/conhome/10073967/proceeding
              </a>
              <br /> <br />
            </p>

            {/* Use it latter on when required */}
            {/* <p class="has-text-align-justify">
                1. ICAC3N conference organizers have zero tolerance against plagiarism and paper formatting as per IEEE template. If author found violating registration guidelines and instructions provided from time to time at any stage during publication the registration of paper will be cancelled.
                <br /> <br />
                2. Transfer of e-copyright and presenting paper in conference is mandatory, without this paper will not be published on IEEE explore.
                <br /> <br />
                3. Corresponding author (as per CMT) keep checking their e-mail regularly (including spam) in this regard and for supplying any other desired information on time.
                <br /> <br />
                4. Registration fee once paid is non refundable.
                </p> */}
          </div>
        </div>
      )}
    </Popup>
  );
};
