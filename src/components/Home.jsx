import React from "react";
import Gallery from "./Gallery";
import "./home.css";

const Home = () => {
  document.title = "ICAC3N - 5th IEEE International Conference on Advances in Computing, Communication Control and Networking";
  return (
    <div className="home">
      <div className="heading">
        <p>ABOUT GALGOTIAS EDUCATIONAL INSTITUTIONS (GEI)</p>
      </div>

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

      <div className="heading">
        <br />
        <p>ABOUT GALGOTIAS COLLEGE OF ENGINEERING AND TECHNOLOGY (GCET)</p>
      </div>

      <div className="matter">
        <p>
          Galgotias College of Engineering & Technology is approved by AICTE,
          Ministry of HRD, Government of India and affiliated to Dr. A.P.J.
          Abdul Kalam Technical University, Lucknow formerly Uttar Pradesh
          Technical University. Galgotias College of Engineering & Technology,
          established in 2000, synergizes theoretical knowledge and practical
          skills to promote all round professional competence. Galgotias College
          of Engineering & Technology has acquired a unique status in UP, the
          NCR region and the country as a whole by breaking new grounds in
          producing professionals of national and international acclaim and has
          been recognized as one of the top ranking institutions imparting high
          quality education.
          <br /> <br />
          The Campus, spread over 19 acres is located on an 8-lane expressway
          connecting Greater Noida with Noida and New Delhi. It is truly a
          self-sufficient campus with spacious and beautifully academic
          buildings, separate, fully secure and comfortable hostels for boys and
          girls, seminar and conference halls as well as indoor and outdoor
          games facilities and a multi-cuisine cafeteria
          <br />
        </p>
      </div>

      <div className="heading">
        <br />
        <p>ABOUT THE DEPARTMENT OF CSE</p>
      </div>

      <div className="matter">
        <p>
          The Computer Science & Engineering Department is one of the
          Departments of GCET that came in to existence in 2000. The department
          has grown significantly after its inception and currently offers a UG
          program in Computer Science and Engineering which enriches the
          knowledge of Practical Engineers from the nearby Industries and
          Research Institutions which includes Government and Private Sectors
          utilizing the locational opportunity of National Capital Region.
          <br /> <br />
          The department of Computer Science provides world-class research and
          education in modern computer science. The department has a cohesive
          team of well experienced faculty members having wide experience in
          recent technologies like Cloud computing, Grid Computing, High
          Performance Computing, Multimedia etc. It has different computer labs
          like Data Structure lab, Operating System lab, Multimedia lab, Web
          Technology lab, Research & Development lab. It also promotes active
          industry-institute collaboration by identifying areas of interest.{" "}
          <br /> <br />
          Some of the major research areas which the faculty members and
          students working on are Computer Networks, Database Systems,
          Multimedia, Image Processing, Software Engineering, Computer
          Architecture, Information System – Security and Data Mining.
          <br /> <br />
          The department excels in varied focus areas ranging from curriculum as
          prescribed by AKTU to game engineering. An extracurricular calendar of
          events and competitions give students ample opportunities to work
          together while gaining real-world experience that prepare them for
          their future careers. The department has extensive student engagement
          framework through regular interactions, annual educational tours,
          regular feedback mechanism, professional chapters and societies. The
          focus of the department is on state-of-the-art projects to be done by
          our B.Tech students, excellent teaching learning process, better
          alumni relations, good industry linked program and outcome based
          education. <br /> <br />
          Galgotias Computer Science graduates are recruited by industry-leading
          companies where they work to develop the hard and soft technologies we
          use everyday – the innovations that will make this world a better
          place for future generations.
          <br />
        </p>
      </div>

      <div className="heading">
        <br />
        <p style={{ color: "#0066bf" }}>Conference Venue</p>
      </div>

      <div className="matter">
        <p>
          Galgotias College of Engineering and Technology, <br />
          1, Knowledge Park-II, <br />
          Greater Noida, (U.P.), India – 201306. <br />
        </p>
      </div>

      <div className="heading">
        <p style={{ color: "#0066bf" }}>Get in Touch</p>
      </div>

      <div className="matter">
        <p>
          Email : 
          <br />
          <a href="mailto:icac3n22@gmail.com">icac3n22@gmail.com</a>
          
          <br />
          Contact No - +91-7835878146
          <br />
          Email : <br />
          <a href="mailto:vishnu.sharma@galgotiacollege.edu">vishnu.sharma@galgotiacollege.edu</a><br />
          <a href="mailto:vishnusharma97@gmail.com">vishnusharma97@gmail.com</a>
        </p>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.7425473538406!2d77.4961839500322!3d28.457176298662016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce565f0000001%3A0x548952c90b21eae1!2sGalgotias%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1645344504632!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border:"2px solid white", borderRadius:"10px"}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
