import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Pat DePuydt</h1>
      <h3>
        I'm a Hawaii-based <span>interface developer</span>,
        <span> web designer</span> creating kick-ass front-ends for companys and projects.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
