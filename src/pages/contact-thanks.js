import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact | Thank you!" />
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            Thanks for reaching out!
          </h1>
          <h1 className="title is-1">
            We will contact you as soon as we can.
          </h1>
          <div style={{paddingTop: "2em"}}>
            <h1 className="title is-1">Navigate back to the <Link to="/"> <h1 className="title is-1 has-text-primary"> home page.</h1></Link>
            </h1>
          </div>
        </div>
      </div>
    </section>
    
  </Layout>
)

export default IndexPage
