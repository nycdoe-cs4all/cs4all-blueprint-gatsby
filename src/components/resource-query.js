import React from "react"
import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby"
const parse = require('html-react-parser')

const ResourceQuery = function (props) {

  return <StaticQuery
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
