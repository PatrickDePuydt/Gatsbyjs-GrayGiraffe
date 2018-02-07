import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>ID.me</h3>
          <p className="info">
           Interface Developer
            <span>&bull;</span>
            <em className="date">2017 - Present</em>
          </p>

          <h6>Responsibilities:</h6>
          <p>Support User-Services vertical as an interface developer and email builder.</p>

          <h6>Day-to-Day</h6>
          <p>
            Front-End: Scss (+Flexbox/CSS Grid), Haml, jQuery, Git (rebase flow) <br />
            Back-End: Ruby on Rails (Limited) <br />
            HTML Emails: Grunt, Scss, Handlbars, Litmus/SalesForce Marketing Cloud/Marketo <br />
            Other Tech: Jira/AWS
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>General Assembly</h3>
          <p className="info">
           Instructor
            <span>&bull;</span>
            <em className="date">2009 - Present</em>
          </p>

          <h6>Responsibilities</h6>
          <p>
            Curriculum Development, Public Delivery, Sales Conversion, 1-1 troubleshooting. <br />
            10-Week Part Time Course: FEWD - 4 Instances (NYC, D.C.) <br />
            1-Night (3hr) Workshop: Intro to HMTL & CSS - 40+ Instances (D.C.)
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Booz Allen Hamilton</h3>
          <h4>Department of Labor | Benefits.gov</h4>
          <p className="info">
           Web Developer
            <span>&bull;</span>
            <em className="date">2016 - 2017</em>
          </p>

          <h6>Day-to-Day Tech</h6>
          <p>
            Drupal 7 MAMP Stack + React / Redux / Webpack Project. 
            Daily to day: Plain JavaScript/jQuery (DOM Manipulation) Sass and Git.
          </p>

          <p className="info">
           User Experience Lead
            <span>&bull;</span>
            <em className="date">2016 - 2017</em>
          </p>

          <h6>Role:</h6>
          <p>
            Lead 4-5 team to implement user-centered design, designed data-driven 
            models, user research, testing and interface development.
          </p>
        </div>
      </div>

    <h4>
      <a href="http://www.linkedin.com/in/patrickdepuydt">Complete Work History</a>
    </h4>
    
    </div>
  </div>
);

export default Work;
