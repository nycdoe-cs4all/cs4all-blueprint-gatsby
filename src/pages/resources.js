import React, {useState} from "react"
import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby"
import ResourceFilterList from "../components/resource-filter-list"
import ResourceQuery from "../components/resource-query"
import Layout from "../components/layout"
import SEO from "../components/seo"

function Resource(props){
  const [category, changeCategory] = useState("");

  return(
  <Layout>
     <SEO title="Educator Resources" />
     <article id="educator-resources">
       <header>
           <h2><span className="preamble">educator</span> Resources</h2>
           <p>Answers to common questions, developed by teachers and NYC DOE staff.</p>
       </header>
       <ResourceFilterList changeCategory={(e) => changeCategory(e)} />
       <div className="article-content">
        <ul className="activity-list">
          <ResourceQuery category={category} />
        </ul>
      </div>
    </article>
  </Layout>
  )
}

export default Resource
