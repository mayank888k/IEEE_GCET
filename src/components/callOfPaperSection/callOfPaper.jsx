import React from "react";
import LikeShare from "../LikeShare/LikeShare";
import "./callOfPaper.css"

const CallOfPaper = () => {
  return (
    <div className="callofpaper">
      <div className="heading">
        <p>Call Of Papers</p>
      </div>
      <div className="matter">
        <p>
          Authors are solicited to contribute to the conference by submitting 
          articles that illustrate research results- projects, surveying works 
          and industrial experiences that describe significant advances in computing, 
          communication control and Networking. Topics of interest for submission 
          include, but are not limited to:
        </p>
        
        <h1> <strong> Track Details: </strong> </h1>
        <div className="track-details">
          <p> <strong> Track 01 </strong> Data Analytics, Data Science and Data Mining </p>
          <p> <strong> Track 02 </strong> Machine Learning And Its Application </p>
          <p> <strong> Track 03 </strong> Big Data Mining and Deep Learning </p>
          <p> <strong> Track 04 </strong> Machine Learning & Deep Learning in Image Processing </p>
          <p> <strong> Track 05 </strong> Artificial Intelligence with Internet of Things </p>
          <p> <strong> Track 06 </strong> Internet of Things (IOT) with Robotics and Automation </p>
          <p> <strong> Track 07 </strong> Artificial Intelligence with Natural Language Processing and Fuzzy Logic </p>
          <p> <strong> Track 08 </strong> Artificial Neural Networks and Convolution Neural Networks </p>
          <p> <strong> Track 09 </strong> Signals and Systems, VLSI Design, Antennas & Embedded Systems </p>
          <p> <strong> Track 10 </strong> Computer Networks, Wireless Sensor Networks and Mobile Communication </p>
          <p> <strong> Track 11 </strong> Network Security, Internet of Things (IoT) Security, Cloud Security and Cyber Security </p>
          <p> <strong> Track 12 </strong> Parallel and Distributed Systems, Cloud Computing, Green Computing & Block Chain Technology </p>
          <p> <strong> Track 13 </strong> Computer Systems, Software Engineering & Web Development </p>
          <p> <strong> Track 14 </strong> Image / Video Processing & Data Compression </p>
          <p> <strong> Track 15 </strong> Control Systems & Automation, IoT with Control Systems & Information Systems </p>
          <p> <strong> Track 16 </strong> Machine Learning & Deep Learning with Cyber Security </p>
          <p> <strong> Track 17 </strong> Researches and Innovations on COVID-19 </p>
        </div>
      </div>

      <LikeShare />
    
    </div>
  );
};

export default CallOfPaper;
