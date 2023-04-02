import React from "react";
import LikeShare from "../LikeShare/LikeShare";
import "./callOfPaper.css"

const CallOfPaper = () => {
  document.title = "Call for Paper | ICAC3N - 5th IEEE International Conference on Advances in Computing, Communication Control and Networking";
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
          <ul>
            <li> Data Analytics, Data Science and Data Mining </li>
            <li> Machine Learning And Its Application </li>
            <li> Big Data Mining and Deep Learning </li>
            <li> Machine Learning & Deep Learning in Image Processing </li>
            <li> Artificial Intelligence with Internet of Things </li>
            <li> Internet of Things (IOT) with Robotics and Automation </li>
            <li> Artificial Intelligence with Natural Language Processing and Fuzzy Logic </li>
            <li> Artificial Neural Networks and Convolution Neural Networks </li>
            <li> Signals and Systems, VLSI Design, Antennas & Embedded Systems </li>
            <li> Computer Networks, Wireless Sensor Networks and Mobile Communication </li>
            <li> Network Security, Internet of Things (IoT) Security, Cloud Security and Cyber Security </li>
            <li> Parallel and Distributed Systems, Cloud Computing, Green Computing & Block Chain Technology </li>
            <li> Computer Systems, Software Engineering & Web Development </li>
            <li> Image / Video Processing & Data Compression </li>
            <li> Control Systems & Automation, IoT with Control Systems & Information Systems </li>
            <li> Machine Learning & Deep Learning with Cyber Security </li>
            <li> Researches and Innovations on COVID-19 </li>
          </ul>
        </div>
      </div>

      <LikeShare />
    
    </div>
  );
};

export default CallOfPaper;
