import React from "react"
import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby"
import moment from "moment"
const parse = require('html-react-parser')

const ResourceQuery = function (props) {

  let propsCategory = props.category;

  return <StaticQuery
    query={graphql`{
      allWordpressPost{
        edges(category: {eq: propsCategory}){
          node {
            id
            slug
            title
            content
            excerpt
            date
            category
          }
        }
      }
    }
  `}
    render={(data) => {
    return(
      <React.Fragment>
      {data.allWordpressPost.edges.map(post =>
        <li key={post.node.id}>
          <Link to={post.node.slug}>
            <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
            <p style={{display:'none'}}>{moment(post.node.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            {post.node.excerpt ? parse(post.node.excerpt) : null}
          </Link>
        </li> )}
      </React.Fragment>
      )
    }}
  />
}

export default ResourceQuery;
