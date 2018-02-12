import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>Who is this man?</h2>
        <p>
          A self-taught go-get-em front-end interface developer in search of constant improvement. With the eye of a graphic designer who relates to user experience design; the skills and perspective of a developer keeping in mind a non-technical perspective and the hunger of an efficiency-monger. 
        </p>
        <p>
          Half Ron Swanson, half Chris Traeger.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Pat DePuydt</span>
              <br />
              <span>
                1945 S. Kihei Road
                <br /> Maui, HI 96753 US
              </span>
              <br />
              <span>(505) 917-5971</span>
              <br />
              <span>prdepuydt@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="https://www.dropbox.com/s/4eap4jzsm2vp400/PatDePuydt.pdf?dl=0" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
