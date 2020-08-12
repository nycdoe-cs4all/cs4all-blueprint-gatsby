import React from "react"
import { graphql } from "gatsby"
import { Router, Link } from "@reach/router"
import moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EducatorResource from "../pages/educator-resource"
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
              <Link to={"/resources/" + post.node.id}> <h3>{post.node.title}</h3> </Link>{" "}
              <p>{moment(post.node.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
              {post.node.excerpt ? parse(post.node.excerpt) : null}
            </li> )}
        </ul>
      </div>
    </article>

    <Router>
     <EducatorResource path="resources/:resourceId" />
   </Router>
  </Layout>
)

export default Resource
