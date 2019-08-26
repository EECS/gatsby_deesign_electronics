import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hi from the contact page.</h1>
    <Link to="/">Go back to the home page.</Link>
  </Layout>
)

export default SecondPage
