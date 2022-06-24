import React from "react";
import "./body.css";
import EmailIcon from "@mui/icons-material/Email";
import { Facebook, Phone, Twitter } from "@mui/icons-material";
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import Home from './Home';
import ImportantDates from "./ImportantDates/ImportantDates";
import SubmissionGuid from "./SubmissionGuideline/SubmissionGuid";
import { Route, Routes } from "react-router";
import AboutGEI from "./aboutSection/aboutGEI";
import AboutGCET from "./aboutSection/aboutGCET";
import AboutCSE from "./aboutSection/aboutCSE";
import OrganisingCommittee from "./committeeSection/organisingCommittee";
import AdvisoryBoard from "./committeeSection/advisoryBoard";
import TechProgCommittee from "./committeeSection/techprogCommittee";
import Speakers from "./speakerSection/speaker";
import Registration from "./Registration/Registration";
import CallOfPaper from "./callOfPaperSection/callOfPaper";
import ContactUs from "./contactUsSection/contactUs";
import Icac3n21 from "./PreviousConferences/Icac3n21.jsx";
import Icac3n20 from "./PreviousConferences/Icac3n20";
import Icac3n18 from "./PreviousConferences/Icac3n18";

const Body = () => {
  return (
    <div className="body">
      <div className="left_section">
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/dates" element={<ImportantDates />} />
        <Route path ="/guidelines" element={<SubmissionGuid />} />
        
        <Route path ="/aboutCSE" element={<AboutCSE />} />
        <Route path ="/aboutGCET" element={<AboutGCET />} />
        <Route path ="/aboutGEI" element={<AboutGEI />} />
        
        <Route path ="/organisingCommittee" element={<OrganisingCommittee />} />
        <Route path ="/advisoryBoard" element={<AdvisoryBoard />} />
        <Route path ="/technicalCommittee" element={<TechProgCommittee />} />

        <Route path ="/speakers" element={<Speakers />} />
        <Route path ="/callforpapers" element={<CallOfPaper />} />

        <Route path ="/registration" element={<Registration />} />

        <Route path ="/contactus" element={<ContactUs />} />

        <Route path ="/ICAC3N21" element={<Icac3n21 />} />
        <Route path ="/ICAC3N20" element={<Icac3n20 />} />
        <Route path ="/ICAC3N18" element={<Icac3n18 />} />
      </Routes>
      </div>
      
      
      <div className="right_section">
        <div className="social">
          <div className="follow">
            <h3>Follow Us</h3>
            <hr />
          </div>
          <div className="icon">
            <a href="mailto:vishnu.sharma@galgotiacollege.edu" className="linkDetails">
              <EmailIcon className="iconDetails" />
            </a>
            <a
              href="https://www.facebook.com/IEEE.ICAC3N.21"
              className="linkDetails"
            >
              <Facebook className="iconDetails" />
            </a>
            <a href="tel:tel:+91-7835878146" className="linkDetails">
              <Phone className="iconDetails" />
            </a>
            <a href="https://twitter.com/icac3n" className="linkDetails">
              <Twitter className="iconDetails" />
            </a>
          </div>
        </div>


        <div className="brochure">
        <div className="view">
          <a href="https://icac3n.in/IEEEFORMAT/ICAC3N-22Brochure.pdf" target = "_blank">
            Click to view brochure
          </a>
        </div>
          <iframe
            src = "https://icac3n.in/IEEEFORMAT/ICAC3N-22Brochure.pdf"
            width="430"
            height="700"
            style={{ border: "none", overflow: "hidden", padding: "20px 40px" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
          >
          </iframe>
        </div>

        {/* <div className="fb_frame">
          <div className="follow">
            <h3>Facebook Feed: #4th_IEEE_ICAC3N</h3>
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
        </div> */}

        {/* <div className="twitt_frame">
          <div className="follow">
            <h3>Twitter Feeds #4th_IEEE_ICAC3N</h3>
            <hr />
          </div>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="icac3n"
            options={{height: 400}}
            className = "twitt"
            />
        </div> */}
      </div>
    </div>
  );
};

export default Body;
