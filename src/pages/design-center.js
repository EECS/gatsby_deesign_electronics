import React from "react"
import { Link } from "gatsby"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";

function DesignCenter({data}) {

  const smps_designs = data.allMdx.edges.map((design) =>{
    return(
      <div className="is-centered column is-one-third-desktop is-full-mobile" key={design.node.id}>
        <div className="card">
          <div className="card-image">
            <Link to={design.node.fields.slug} style={{textDecoration: "None"}}>
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </Link>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <Link to={design.node.fields.slug} style={{textDecoration: "None"}}>
                  <p className="title is-5">{design.node.frontmatter.seoTitle}</p>
                </Link>
              </div>
            </div>

            <div className="content">
              {design.node.frontmatter.description}
            </div>
            <footer className="card-footer columns">
              <div className="column card-footer-item is-four-fifths">
                <span>
                  <Link to={design.node.fields.slug} style={{textDecoration: "None"}}>
                    <p className="has-text-primary hover-dark">
                      Read more &rarr;
                    </p>
                  </Link>
                </span>
              </div>
              <p className="card-footer-item">
                <span className="icon is-medium">
                  <FontAwesomeIcon icon={faShareSquare}/>
                </span>
              </p>
            </footer>
          </div>
        </div>
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
            <div className="columns is-centered">
              {smps_designs}
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