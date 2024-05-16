import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <div>InstagramIcon</div>
        <div>TwitterIcon</div>
        <div>FacebookIcon</div>
        <div>LinkedInIcon</div>
      </div>
      <p>Copyright &copy; JonathanMB {new Date().getFullYear()} | All Rights Reserved </p>
    </div>
  );
}

export default Footer;
