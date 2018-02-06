import React from "react";
import {
  FaLinkedinSquare,
  FaGithub,
  FaInstagram
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="http://www.linkedin.com/in/patrickdepuydt" target="_blank">
        <FaLinkedinSquare />
      </a>
    </li>
    <li>
      <a href="http://www.github.com/patrickdepuydt" target="_blank">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="http://www.instagram.com/asparagustus" target="_blank">
        <FaInstagram />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
