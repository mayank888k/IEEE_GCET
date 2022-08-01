import axios from "axios";
import React from "react";
import LikeShare from "../LikeShare/LikeShare";
import "./registration.css";
import registration_fee from "./registration_fee.jpeg";
import pfd from '../images/PAPER_ID_ICAC3N22.pdf'

const Registration = () => {
  const download = (event) =>{
      event.preventDefault()
      axios({
        url: pfd, //your url
        method: 'GET',
        responseType: 'blob', // important
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'PAPER_ID_ICAC3N22.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
    });
    // window.open("https://icac3n.in/IEEEFORMAT/PAPER_ID_ICAC3N22.pdf")

  }
  document.title = "Registration | ICAC3N - 4th IEEE International Conference on Advances in Computing, Communication Control and Networking";
  return (
    <div className="registration">
      <div className="topsection">
        <h1>Registration Fee</h1>
        <div className="reg_img">
          <img src={registration_fee} alt="Registration Fee Details" />
        </div>
        <h4
          style={{
            fontStyle: "italic",
            color: "grey",
            fontSize: "17px",
            margin: "50px 0px",
          }}
        >
          *Including 18% GST
        </h4>

        <h1>Camera Ready Format</h1>
        
        <div class="btn_upper">
          <div class="btn_sub">
            <a
              class="anchor"
              href="https://icac3n.in/IEEEFORMAT/PAPER_ID_ICAC3N22.docx"
            >
              1 - Click Here To Download DOCX File
            </a>
          </div>
        </div>
        <div class="btn_upper_reg">
          <div class="btn_sub">
            <a
              class="anchor"
              href="https://icac3n.in/IEEEFORMAT/PAPER_ID_ICAC3N22.pdf"
              target= "_blank"
              title="PAPER_ID_ICAC3N22.pdf"
            >
              2 - Click Here To Download PDF File
            </a>
          </div>
        </div>
        {/* <button onClick={download}>Download</button> */}
        
        <h1>Registration</h1>
        
        <div class="btn_upper">
          <div class="btn_sub">
            <a
              class="anchor"
              href="https://forms.gle/8acy23i3UbtwLkFXA"
              target="_blank"
            >
              Click Here for registration
            </a>
          </div>
        </div>
      </div>
        
        <h1>Bank Account Details For Registration</h1>
        <p>PAYMENT MODE – NEFT / IMPS / DIRECT DEPOSIT / SWIFT TRANSFER/UPI</p>

        <div className="table">
            <table>
                <tbody>
                    <tr className="row">
                        <td className="data">
                        Account Number
                        </td>
                        <td className="data2">
                        6420000100006852
                        </td>
                    </tr>


                    <tr className="row">
                        <td className="data">
                        Account Name
                        </td>
                        <td className="data2">
                        GALGOTIAS COLLEGE OF ENGINEERING AND TECHNOLOGY
                        </td>
                    </tr>


                    <tr className="row">
                        <td className="data">
                        IFSC Code
                        </td>
                        <td className="data2">	
                        PUNB0671700
                        </td>
                    </tr>


                    <tr className="row">
                        <td className="data">
                        Swift Code
                        </td>
                        <td className="data2">	
                        PUNBINBBMSN
                        </td>
                    </tr>


                    <tr className="row">
                        <td className="data">
                        Bank Name
                        </td>
                        <td className="data2">		
                        PUNJAB NATIONAL BANK
                        </td>
                    </tr>


                    <tr className="row">
                        <td className="data">
                        Account Type
                        </td>
                        <td className="data2">		
                        Saving
                        </td>
                    </tr>


                    <tr className="row">
                        <td className="data">
                        Bank Address
                        </td>
                        <td className="data2">		
                        	
                        Punjab National Bank, Sector-63
                        Gautam Buddha Nagar-201301, U.P.
                        </td>
                    </tr>


                </tbody>
            </table>


          <div className="note">
            <h4
                style={{
                fontStyle: "italic",
                color: "grey",
                fontSize: "17px",
                margin: "50px 0px",
                border: "0px !important"
                }}
            >
            Note: Registration fee once submitted, it cannot be refunded.
            </h4>
          </div>
                <div className="l">
                <LikeShare />
                </div>
        </div>
    </div>
  );
};

export default Registration;
