import React from "react";
import LikeShare from "../LikeShare/LikeShare";
import "./about.css"
import gcetlogo from './aboutImages/gcet-logoi.jpg'
import gcetimg from './aboutImages/gcetimage3.jpg'

const AboutGCET = () => {
  return (
    <div className="about">
        <div style={{textAlign:"center"}} className="lg">
            <img  src={gcetlogo} alt="GCET-logo"/>
        </div>
    <div className="heading">
        <br />
        <p>ABOUT GCET</p>
      </div>


      <div className="matter">
        <br/>
        <p>
            <strong>Galgotias College of Engineering and Technology</strong>
             is approved by AICTE, Ministry of HRD, Government of India and 
            affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow 
            formerly Uttar Pradesh Technical University. Galgotias College of 
            Engineering & Technology, established in 2000, synergizes theoretical 
            knowledge and practical skills to promote all round professional competence.
            Galgotias College of Engineering & Technology has acquired a unique status 
            in UP, the NCR region and the country as a whole by breaking new grounds 
            in producing professionals of national and international acclaim and 
            has been recognized as one of the top ranking institutions imparting 
            high quality education. 
        </p>

        <div style={{textAlign:"center"}} className="lg">
          <img style={{width:"300px", height:"200px", margin:"15px"}} src={gcetimg} alt="GCET img"/>
        </div>
        <br/>

        <p>
            The Campus, spread over 19 acres is located on an 8-lane expressway connecting 
            Greater Noida with Noida and New Delhi. It is truly a self-sufficient campus 
            with spacious and beautifully academic buildings, separate, fully secure and 
            comfortable hostels for boys and girls, seminar and conference halls as well 
            as indoor and outdoor games facilities and a multi-cuisine cafeteria.
        </p>

      </div>
            <br />

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.7425473538406!2d77.4961839500322!3d28.457176298662016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce565f0000001%3A0x548952c90b21eae1!2sGalgotias%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1645344504632!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border:"2px solid white", borderRadius:"10px", marginLeft:"10px"}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <LikeShare />
    </div>
  );
};

export default AboutGCET;
