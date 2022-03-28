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
          Communication Control, and Networking –ICAC3N-21 took place in
          Galgotias College of Engineering and Technology, Greater Noida, India,
          on December 17-18, 2021. The conference was a worldwide gathering of
          top academicians, researchers, and research scholars to interact and
          share their experiences and difficult technical breakthroughs in all
          areas of computing, communication control, and networking research. We
          had invited all of the world's leading researchers, engineers, and
          scientists in the field of interest.
          <br />
        </p>
      </div>

      <div className="matter">
        <p style={{ fontStyle: "italic" }}>
          <br />
          The proceedings of 3rd IEEE ICAC3N-21 is available on IEEE Xplore
          (Scopus Indexed)
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
