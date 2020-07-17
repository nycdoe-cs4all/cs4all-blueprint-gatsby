import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resource = ({ data }) => (
  <Layout>
     <SEO title="Resource Name(will code this in)" />
     {JSON.stringify(data, null, 4)}
  </Layout>
)

export const query = graphql`
  {
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          date
          modified
        }
      }
    }
  }
`

export default Resource
