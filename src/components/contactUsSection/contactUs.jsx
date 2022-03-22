import React from "react";
import LikeShare from "../LikeShare/LikeShare";
import "./contactUs.css"

const ContactUs = () => {
  document.title = "Contact US | ICAC3N IEEE International Conference on Advances in Computing, Communication Control and Networking";
  return (
    <div className="contactus">
      <div className="heading">
        <p>Contact Us</p>
      </div>
      <div className="form-container">
        <form action="#form-action" method="post">
            <label for="name"> <strong>Name</strong> (Required)</label>
            <input type="text" name="name" id="name" required/>

            <label for="email"> <strong>Email</strong> (Required)</label>
            <input type="email" name="email" id="email" required/>

            <label for="comment"> <strong>Comment</strong> (Required)</label>
            <textarea name="comment" id="comment" required/>

            <button type="submit">Submit</button>
          </form>
      </div>
      
      <div className="get-in-touch">
        <h1> <strong> Get In Touch: </strong> </h1>
        <p> <strong>EMAIL:</strong> <span> support@icac3n.in </span> </p>
        <p> <strong>EMAIL:</strong> <span> icac3n22@gmail.com </span> </p>
        <p> <strong>CONTACT US:</strong> <span> +91-7835878146 </span> </p>
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
    </div>
  );
};

export default ContactUs;
