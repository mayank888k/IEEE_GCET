import { fontSize } from "@mui/system";
import React from "react";
import "./impdates.css";
import LikeShare from "../LikeShare/LikeShare";

const ImportantDates = () => {
  document.title = "Important Dates | ICAC3N - 5th IEEE International Conference on Advances in Computing, Communication Control and Networking";
  return (
    <div className="ipdt">
    <div className="heading">
        <p>IMPORTANT DATES</p>
        <br />
      </div>

      <table>
        <tbody className="table_body">
          <tr className="row1">
            <td className="data">
              <strong>Paper Submission Starts</strong>
            </td>
            <td className="data">
              <strong>:&nbsp;&nbsp;&nbsp; 10/04/2023</strong>
            </td>
          </tr>
          <tr className="row2">
            <td className="data">
              <strong>Paper Submission Deadline</strong>
            </td>
            <td className="data">
              <strong>:&nbsp;&nbsp;&nbsp; 31/07/2023</strong>
            </td>
          </tr>


          <tr className="row1">
            <td className="data">
              <strong>Acceptance Notification</strong>
            </td>
            <td className="data">
              <strong>:&nbsp;&nbsp;&nbsp; 31/08/2023 <br />&nbsp;&nbsp;&nbsp;&nbsp;(within 4 weeks from submission)</strong>
            </td>
          </tr>
          <tr className="row2">
            <td className="data">
              <strong>Registration</strong>
            </td>
            <td className="data">
              <strong>:&nbsp;&nbsp;&nbsp; 30/09/2023</strong>
            </td>
          </tr>

          <tr className="row1">
            <td className="data">
              <strong>Camera Ready Paper</strong>
            </td>
            <td className="data">
              <strong>:&nbsp;&nbsp;&nbsp; 30/09/2023</strong>
            </td>
          </tr>
          <tr className="row2">
            <td className="data">
              <strong>Conference Date:</strong>
            </td>
            <td className="data">
              <strong>:&nbsp;&nbsp;&nbsp;15th – 16th December, 2023 </strong>
            </td>
          </tr>
        </tbody>
      </table>

      
      <h4 style={{fontStyle:"italic", color:"grey", fontSize:"17px", margin:"50px 0px"}}>*All Dates are in DD/MM/YYYY Format</h4>
    
        <LikeShare />
    </div>
  );
};

export default ImportantDates;
