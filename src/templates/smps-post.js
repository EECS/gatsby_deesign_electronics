import React from "react"
import {Link} from "gatsby"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Equation from "../components/Equation/Equation";

const shortcodes = {
    Equation
}

class SMPSPostTemplate extends React.Component {
    render(){
        {/* Props come from the pageQuery at the bottom of the file. */}
        const post = this.props.data.mdx;

        return (
            <Layout>
                <SEO title={post.frontmatter.seoTitle} description={post.excerpt}/>
                <MDXProvider components={shortcodes}>
                    <h3>{post.frontmatter.fullTitle}</h3>
                    <MDXRenderer>{post.body}</MDXRenderer>
                    <Link to="/design-center/">Go back to the design center page.</Link>
                </MDXProvider>
            </Layout>
        );
    }
}

export default SMPSPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
        id
        body
        excerpt(pruneLength: 160)
        frontmatter {
          fullTitle
          seoTitle
          date
        }
      }
  }
`
