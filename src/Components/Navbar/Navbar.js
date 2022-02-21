import React, { Component } from "react";
import "./Navbar.css";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="slogo">
        <IoLogoTwitter></IoLogoTwitter>
      </div>
      <div className="slogo">
        <IoLogoInstagram></IoLogoInstagram>
      </div>
      <div className="slogo">
        <IoLogoGithub></IoLogoGithub>
      </div>
      <div className="slogo">
        <FaFacebookF></FaFacebookF>
      </div>
      <div className="slogo">
        <IoLogoLinkedin></IoLogoLinkedin>
      </div>
      <div className="vl"></div>
      <div className="slogo" id="sl">V</div>
    </div>
  );
}
export default Navbar;
