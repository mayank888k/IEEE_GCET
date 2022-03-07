import React from "react";
import LikeShare from "../LikeShare/LikeShare";
import "./about.css"

const AboutCSE = () => {
  return (
    <div className="about">
    <div className="heading">
        <p>ABOUT CSE</p>
      </div>
        <div className="matter">
            
            <p>
                The Computer Science & Engineering Department is one of the Departments 
                of GCET that came in to existence in 2000. The department has grown 
                significantly after its inception and currently offers a UG program 
                in Computer Science and Engineering which enriches the knowledge of 
                Practical Engineers from the nearby Industries and Research Institutions 
                which includes Government and Private Sectors utilizing the locational 
                opportunity of National Capital Region.
            </p>

            <p>
                The department of Computer Science provides world-class research and 
                education in modern computer science. The department has a cohesive 
                team of well experienced faculty members having wide experience in 
                recent technologies like Cloud computing, Grid Computing, High 
                Performance Computing, Multimedia etc. It has different computer labs 
                like Data Structure lab, Operating System lab, Multimedia lab, Web Technology 
                lab, Research & Development lab. It also promotes active industry-institute 
                collaboration by identifying areas of interest.
            </p>

            <p>
                Some of the major research areas which the faculty members and 
                students working on are Computer Networks, Database Systems, Multimedia, 
                Image Processing, Software Engineering, Computer Architecture, Information 
                System – Security and Data Mining.
            </p>

            <p>
                The department excels in varied focus areas ranging from curriculum as prescribed 
                by AKTU to game engineering. An extracurricular calendar of events and competitions 
                give students ample opportunities to work together while gaining real-world experience 
                that prepare them for their future careers. The department has extensive student 
                engagement framework through regular interactions, annual educational tours, regular 
                feedback mechanism, professional chapters and societies. The focus of the department 
                is on state-of-the-art projects to be done by our B.Tech students, excellent teaching 
                learning process, better alumni relations, good industry linked program and outcome based education.
            </p>

            <p>
                Galgotias Computer Science graduates are recruited by industry-leading companies 
                where they work to develop the hard and soft technologies we use everyday – 
                the innovations that will make this world a better place for future generations.
            </p>

        </div>
        <LikeShare />
    </div>
  );
};

export default AboutCSE;
