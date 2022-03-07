import React from "react";
import "./body.css";
import EmailIcon from "@mui/icons-material/Email";
import { Facebook, Phone, Twitter } from "@mui/icons-material";
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import Home from './Home';
import ImportantDates from "./ImportantDates/ImportantDates";
import SubmissionGuid from "./SubmissionGuideline/SubmissionGuid";
import { Route, Routes } from "react-router";

const Body = () => {
  return (
    <div className="body">
      <div className="left_section">
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/dates" element={<ImportantDates />} />
        <Route path ="/guidelines" element={<SubmissionGuid />} />
      </Routes>
      </div>
      
      
      <div className="right_section">
        <div className="social">
          <div className="follow">
            <h3>Follow Us</h3>
            <hr />
          </div>
          <div className="icon">
            <a href="mailto:icac3n.21@gmail.com" className="linkDetails">
              <EmailIcon className="iconDetails" />
            </a>
            <a
              href="https://www.facebook.com/IEEE.ICAC3N.21"
              className="linkDetails"
            >
              <Facebook className="iconDetails" />
            </a>
            <a href="tel:tel:+91-7065181997" className="linkDetails">
              <Phone className="iconDetails" />
            </a>
            <a href="https://twitter.com/icac3n" className="linkDetails">
              <Twitter className="iconDetails" />
            </a>
          </div>
        </div>

        <div className="fb_frame">
          <div className="follow">
            <h3>Facebook Feed: #3rd_IEEE_ICAC3N</h3>
            <hr />
          </div>

          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIEEE.ICAC3N.21&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="330"
            height="400"
            style={{ border: "none", overflow: "hidden", padding: "20px 40px" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>

        <div className="twitt_frame">
          <div className="follow">
            <h3>Twitter Feeds #3rd_IEEE_ICAC3N</h3>
            <hr />
          </div>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="icac3n"
            options={{height: 400}}
            className = "twitt"
            />
        </div>
      </div>
    </div>
  );
};

export default Body;
