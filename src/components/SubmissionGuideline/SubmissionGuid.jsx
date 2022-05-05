import React from "react";
import LikeShare from "../LikeShare/LikeShare";
import "./submission.css";

const SubmissionGuid = () => {
  document.title = "Submission Guidelines | ICAC3N - 4th IEEE International Conference on Advances in Computing, Communication Control and Networking";
  return (
    <div className="sub">
      <div className="heading">
        <p>SUBMISSION GUIDELINES</p>
      </div>

      <div className="matter">
        <p class="has-text-align-justify">
          Authors are solicited to contribute to the conference by submitting
          articles that illustrate research results- projects, surveying works
          and industrial experiences that describe significant advances in
          computing, communication and Automation. Topics of interest for
          submission include, but are not limited to:
        </p>

        <p class="has-text-align-justify">
          •&nbsp; Evolutionary Computing, Distributed and Parallel Processing,
          Cloud and Green Computing, IOT, Data Mining, Advance Database
          Management System
        </p>

        <p class="has-text-align-justify">
          • Big Data, Data Analysis, Machine Learning and Artificial
          Intelligence, Mobile Computing, Artificial Neural Network, MANETs,
          Computer Networking
        </p>

        <p>
          • Cyber security, Virtual Reality, Network Security, WSN, Multimedia
          Applications
        </p>

        <p>•&nbsp; Web Intelligence &amp; Semantics</p>

        <p>•&nbsp; Ubiquitous Computing &amp; Networking</p>

        <p>•&nbsp; Software Engineering &amp; Information Systems</p>

        <p>•&nbsp; Intelligent Systems &amp; Automation</p>

        <p>•&nbsp; Hardware design &amp; Communication</p>

        <p>•&nbsp; Signal &amp; Image Processing, VLSI Design</p>

        <p>•&nbsp; Wireless Sensor Networks, Security</p>

        <p>•&nbsp; Robotics &amp; Automation</p>

        <p>•&nbsp; Communication Network and Systems</p>

        <p>•&nbsp; Smart Grid Technologies</p>

        <p>•&nbsp; Smart buildings Technologies</p>

        <p>
          • New Measurement technologies and Application, Fuzzy &amp; Neural
          Networks
        </p>

        <p class="has-text-align-justify">
          Interested authors are invited to submit full papers including
          results, figures and references. Papers will be accepted only by
          electronic submission through easy-chair link given below
        </p>

        <div class="btn_upper">
          <div class="btn_sub">
            <a
              class="anchor"
              href="https://cmt3.research.microsoft.com/ICAC3N2022"
              target="_blank"
              rel="noreferrer noopener"
            >
              Click to Submit Paper
            </a>
          </div>
        </div>

        <p class="has-text-align-justify">
          Authors need to submit the full final paper (Maximum 6 pages,
          double-column US letter size) as PDF using the IEEE templates. Extra
          pages beyond this would require additional page length charges. The
          additional payment required for extra pages is Rs.2000/page for Indian
          authors of all categories and USD 40/page for all categories of
          foreign authors. The IEEE paper template can be downloaded from the
          link given below.{" "}
        </p>

        <div class="btn_upper">
          <div class="btn_sub">
            <a
              class="anchor"
              href="https://icac3n.in/IEEEFORMAT/PAPER_ID_ICAC3N22.docx"
            >
              Click to Download IEEE Conference Paper Template
            </a>
          </div>
        </div>

        <div className="heading">
          <p style={{fontWeight: "bold", fontSize: "large"}}>Plagiarism Policy </p>
        </div>

        <p class="has-text-align-justify">
          ICAC3N-22 takes plagiarism very seriously and regard plagiarism as a
          professional misconduct. Papers will be screened for plagiarism and
          when identified the paper will be rejected.
        </p>
      </div>

      <LikeShare />
    </div>
  );
};

export default SubmissionGuid;
