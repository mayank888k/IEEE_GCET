import { fontStyle } from "@mui/system";
import React from "react";
import "./icac3n21.css";

const Icac3n21 = () => {
  return (
    <div className="icac3n">
      <div className="heading">
        <p>About 3rd ICAC3N-21</p>
      </div>

      <div className="matter">
        <p>
          The 3rd International Conference on Advances in Computing,
          Communication Control and Networking –ICACCCN (ICAC3N-21) will be held
          during December 17-18, 2021 in Galgotias College of Engineering and
          Technology, Greater Noida, India. The conference is an international
          forum which aims to bring together leading academician, researchers
          and research scholars to exchange and share their experiences and
          hard-earned technological advancements about all aspects of based on
          their research related to Computing, Communication Control &
          Networking. We invite all leading researchers, engineers, and
          scientists in the domain of interest from around the world. We warmly
          welcome all authors to submit your research papers to ICAC3N-21, and
          share the valuable experiences with the scientist and scholars around
          the world.
          <br />
        </p>
      </div>

      <div className="matter">
          <p style={{fontStyle:"italic"}}>
          <br />
          The proceedings of 3rd IEEE ICAC3N-21 is available on IEEE Xplore (Scopus Indexed) 
          </p>
      </div>

        <div class="btn_upper">
          <div class="btn_sub">
            <a
              class="anchor"
              href="https://ieeexplore.ieee.org/xpl/conhome/9725360/proceeding"
            >
              Click Here for Proceedings
            </a>
          </div>
        </div>
    </div>
  );
};

export default Icac3n21;
