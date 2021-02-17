/**
 * Accordion component that is used to hide/show blocks of information
 * used in Concept, Practice, and Perspective pages
 */

/* Imports */
import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"

/* Parser */
const parse = require('html-react-parser')

/* Component */
const ResourceQuery = function (props) {

  /* Display component */
  return <StaticQuery

    /* Pull all posts from the attatched wordpress site */
    query={graphql`{
      allWordpressPost {
        edges {
          node {
            id
            slug
            title
            content
            excerpt
            date
            categories {
              id
              name
            }
          }
        }
      }
    }
  `}

    /**
     * Add a resource block/link to the page
     * for every post in the above query
     * and change it to visible or hidden based on category
     */
    render={(data) => {
    return(
      <React.Fragment>
        {data.allWordpressPost.edges.map(post =>
          <li key={post.node.id} className={post.node.categories.map(entry => entry.name).includes(props.category) || props.category === "All" ? "active" : "inactive"}>
            <Link to={post.node.slug}>
              <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
              {post.node.excerpt ? parse(post.node.excerpt) : null}
            </Link>
          </li>
        )}
      </React.Fragment>
      )
    }}
  />
}

export default ResourceQuery;
