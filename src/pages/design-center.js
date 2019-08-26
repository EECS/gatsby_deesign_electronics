import React from "react"
import { Link } from "gatsby"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function DesignCenter({data}) {

  const smps_designs = data.allMdx.edges.map((design) =>{
    return(
      <div className="column" key={design.node.id}>
        <div className="has-text-centered">
          <Link to={design.node.fields.slug}>
              <button className="button is-outlined is-primary">
                {design.node.frontmatter.seoTitle}
              </button>
          </Link>
        </div>
        <h2>
          {design.node.frontmatter.description}
        </h2>
      </div>
    );
  });

  return(
      <Layout>
        <SEO title="Design Center" description="Landing page for all designs in the design center."/>
        <section className="hero is-fullheight" style={{paddingTop: "2em"}}>
          <div className="container">
            <div className="columns">
              <div className="column is-full">
                <h1 className="title is-1 has-text-centered">
                  <u>
                    Design Center
                  </u>
                </h1>
              </div>
            </div>
            <div className="columns">
              <div className="column is-full">
                <div className="column is-full">
                  <h2 className="title is-2">
                    Switch-Mode Power Supplies:
                  </h2>
                </div>
              {smps_designs}
              </div>
            </div>
          </div>
        </section>
      </Layout>
  );
}

export default DesignCenter

export const pageQuery = graphql`
  query SMPSQuery{
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 160)
          frontmatter {
            seoTitle
            description
          }
        }
      }
    }
  }
`