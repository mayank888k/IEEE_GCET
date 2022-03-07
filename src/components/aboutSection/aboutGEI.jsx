import React from "react";
import "./about.css"
import Gallery from "../Gallery";
import courseimg from './aboutImages/courseimg.jpg'

const AboutGEI = () => {
  return (
    <div className="about">

      <div className="matter">
        <p>
          Galgotias Educational Institutions (GEI) have been inculcating
          practical skills and creating ‘Global Professionals’ for more than 18
          years. Founded by Smt. Shakuntala Educational and Welfare Society,
          Galgotia Educational Institutions is currently led by Mr. Suneel
          Galgotia, Chairman and a resolute visionary. Galgotias College of
          Engineering & Technology is placed among the best in professional
          education in Dr. APJ Abdul Kalam Technical University (Formerly U.P.
          Technical University). It has achieved top positions in MBA, MCA and
          B.Tech. finals and has a record of 100% placements with the best
          corporate houses. It has also been ranked amongst the top engineering
          colleges in India by DATAQUEST NASSCOM survey and OUTLOOK-C For
          College Survey.

          <br />
          <br />

          <img src={courseimg} alt="courseIMG" width={700}/>
          
          <br />
          <br />

          Galgotia Educational Institutions combine a supremely empowering
          educational process, industry stalwarts in their faculty, global
          educational associations and relentless placement efforts, to offer
          the best of career opportunities to its students. Galgotia Educational
          Institutions are known for a combination of state-of-the-art campus,
          strategic teaching-learning process, together with the most advanced
          facilities, creating an environment in which wholesome corporate
          personalities are created.
 
        </p>

      </div>

      <div className="gallery">
        <Gallery />
      </div> 

    </div>
  );
};

export default AboutGEI;
