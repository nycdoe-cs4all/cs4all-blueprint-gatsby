import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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


const Resource = ({ data }) => (
  <Layout>
     <SEO title="Educator Resources" />
     <div style={{display: 'flex', width: '100%', height: '100vh', overflow: 'auto'}}>
      {data.allWordpressPost.edges.map(post =>
        <div key={data.allWordpressPost.edges.indexOf(post)} style={{display: 'block'}}>
          <p>{post.node.title}</p>
          <p>{post.node.date}</p>
        </div>
      )}
     </div>
  </Layout>
)

export default Resource
