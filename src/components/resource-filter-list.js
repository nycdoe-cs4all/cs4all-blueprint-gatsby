import React from "react"
import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby"
import moment from "moment"
const parse = require('html-react-parser')

const ResourceFilterList = function (props) {

  return <StaticQuery
    query={graphql`{
      allWordpressCategory{
        edges(name: {ne: "Uncategorized"}){
          node{
            name
            id
          }
        }
      }
    }
  `}
    render={(data) => {
    return(
    <div id="page-menu" className="light-theme">
      <header>
          <a href="#page-menu" className="toggle">
              <h3>
                  <span className="icon open"><svg><use xLinkHref="#icon-filter"></use></svg></span>
                  <span className="icon close"><svg><use xLinkHref="#icon-close"></use></svg></span>
                  <span className="label">Filter Resources</span>
              </h3>
          </a>
      </header>
      <div className="menu-content">
          <ul>
          {data.allWordpressCategory.edges.map(category =>
            <li key={category.edges.id}>
              <Link onClick={() => props.changeCategory(category.edges.name)}>
                <h3>{category.edges.name}</h3>
              </Link>
            </li> )}
          </ul>
      </div>
    </div>
  )}}
  />
}

export default ResourceFilterList;
