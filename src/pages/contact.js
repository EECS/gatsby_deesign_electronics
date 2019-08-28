import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactFormContainer from "../components/ContactForm";

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <section className="hero is-fullheight" style={{paddingTop: "2em", justifyContent: "flex-start"}}>
      <div className="columns" >
        <div className="column is-full">
          <h1 className="title is-1 has-text-centered">
            Contact Us
          </h1>
          <h3 className="title is-3" style={{paddingRight: "10%", paddingLeft: "10%"}}>
            Get in touch using the form below!
          </h3>
          <h3 className="title is-3" style={{paddingRight: "10%", paddingLeft: "10%"}}>
            A testimonial that can be featured on the front-page of the website will get you <span className="has-text-danger">3 months </span> free access to the site!
          </h3>
        </div>
      </div>

      <ContactFormContainer />
      
    </section>
  </Layout>
)

export default Contact
