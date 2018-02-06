import React from "react";

export default ({ data }) => (
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h1>{data.site.siteMetadata.name}</h1>
    <span>{data.site.siteMetadata.tagline}</span>

    <div>
      <p>{data.site.siteMetadata.current_role}</p>
      <p>{data.site.siteMetadata.current_company}</p>
      <p>{data.site.siteMetadata.dev_skills}</p>
      <p>{data.site.siteMetadata.design_skills}</p>
      <p>{data.site.siteMetadata.email}</p>
      <p>{data.site.siteMetadata.github}</p>
      <p>{data.site.siteMetadata.linkedin}</p>
    </div>
  </div>
);

export const query = graphql`
  query homeQuery {
    site {
      siteMetadata {
        name
        tagline
        current_role
        current_company
        dev_skills
        design_skills
        email
        media
        phone
        github
        linkedin
      }
    }
  }
`

