import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Features from "../components/Features"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Complex circuit design in 5 minutes.
          </h1>
          <h2 className="subtitle">
            Tailor-made for the professional to the hobbyist.
          </h2>
          <div style={{paddingTop: "2em"}}>
            <a className="button is-primary is-outlined is-large">Sign-up</a>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div>
        <Features />
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
