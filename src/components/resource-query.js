/**
 * Accordion component that is used to hide/show blocks of information
 * used in Concept, Practice, and Perspective pages
 */

/* Imports */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

/* Parser */
import parse from "html-react-parser";

/* Component */
const ResourceQuery = function (props) {
  /* Display component */
  return (
    <StaticQuery
      /* Pull all posts from the attatched wordpress site */
      query={graphql`
        {
          allWpPost {
            edges {
              node {
                id
                slug
                title
                excerpt
                categories {
                  nodes {
                    name
                  }
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
      render={data => {
        return (
          <React.Fragment>
            {data.allWpPost.edges.map(post => (
              <li
                key={post.node.id}
                className={
                  post.node.categories.nodes
                    .map(entry => entry.name)
                    .includes(props.category) || props.category === "All"
                    ? "active"
                    : "inactive"
                }
              >
                <Link to={post.node.slug}>
                  <h3>
                    <span
                      className="activity-name"
                      dangerouslySetInnerHTML={{ __html: post.node.title }}
                    />
                  </h3>
                  <p className="activity-desc">
                    {post.node.excerpt ? parse(post.node.excerpt) : null}
                  </p>
                  <span>
                    Categories:{" "}
                    {post.node.categories.nodes.map(
                      (category, index) => (index ? ", " : "") + category.name
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </React.Fragment>
        )
      }}
    />
  )
}

export default ResourceQuery
