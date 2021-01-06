import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"
const parse = require('html-react-parser')

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
        }
      }
    }
  }
`

const Resource = ({ data }) => (
  <Layout>
     <SEO title="Educator Resources" />
     <article id="educator-resources">
       <header>
           <h2><span className="preamble">educator</span> Resources</h2>
           <p>Answers to common questions, developed by teachers and NYC DOE staff.</p>
       </header>
       <div className="article-content">
        <ul className="activity-list">
          {data.allWordpressPost.edges.map(post =>
            <li key={post.node.id}>
              <Link to={post.node.slug}>
                <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                <p style={{display:'none'}}>{moment(post.node.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                {post.node.excerpt ? parse(post.node.excerpt) : null}
              </Link>
            </li> )}
        </ul>
      </div>
    </article>
  </Layout>
)

export default Resource
