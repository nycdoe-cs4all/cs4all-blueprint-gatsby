import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"
const parse = require('html-react-parser')

export const query = graphql`
  {
    allWordpressCategory {
      nodes {
        name
      }
    }
  }
`

const ResourceFilterList = ({ data }) => (
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
        {data.allWordpressCategory.nodes.map(category =>
          <li key={category.nodes.id}>
            <Link onClick={() => props.changeFilter(category.nodes.name)}>
              <h3>{category.nodes.name}</h3>
            </Link>
          </li> )}
        </ul>
    </div>
  </div>
)

export default ResourceFilterList
