import React, { useState } from "react";
import { StaticQuery, graphql } from 'gatsby';

const ResourceFilterList = function (props) {

  const [filterState, setFilterState] = useState(false);

  return <StaticQuery
    query={graphql`{
      allWordpressCategory (filter: {name: {ne: "Uncategorized"}}) {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `}
    render={(data) => {
    return(
    <div id="page-menu" className={filterState ? "light-theme active" : "light-theme inactive"}>
      <header>
          <a href="#page-menu" className="toggle" onClick={() => {setFilterState(!filterState); return false;}} role="button">
              <h3>
                  <span className="icon open"><svg><use xlinkHref="#icon-open"/></svg></span>
                  <span className="icon close"><svg><use xlinkHref="#icon-close"/></svg></span>
                  <span className="label">Filter Resources</span>
              </h3>
          </a>
      </header>
      <div className="menu-content">
          <ul>
            <li key="0">
              <a href="#page-menu" onClick={() => {props.changeCategory("All"); return false;}}>
                All Resources
              </a>
            </li>
            {data.allWordpressCategory.edges.map(edge => {
              return (
                <li key={edge.node.id}>
                  <a href="#page-menu" onClick={() => {props.changeCategory(edge.node.name); return false;}}>
                    {edge.node.name}
                  </a>
                </li>
              )})
            }
          </ul>
      </div>
    </div>
  )}}
  />
}

export default ResourceFilterList;
