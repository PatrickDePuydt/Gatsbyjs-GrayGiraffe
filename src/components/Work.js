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

          <h4>Responsibilities:</h4>
          <p>Support User-Services vertical as an interface developer and email builder.</p>

          <h4>Tech</h4>
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
          <h3>Super Cool Studio</h3>
          <p className="info">
            UX Designer
            <span>&bull;</span>
            <em className="date">March 2007 - February 2010</em>
          </p>

          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
