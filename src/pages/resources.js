import React, {useState} from "react"
import ResourceFilterList from "../components/resource-filter-list"
import ResourceQuery from "../components/resource-query"
import Layout from "../components/layout"
import SEO from "../components/seo"

function Resource(props){
  const [category, changeCategory] = useState("All");

  return(
  <Layout>
     <SEO title="Educator Resources" />
     <div id="page">
      <ResourceFilterList changeCategory={(e) => changeCategory(e)} />
      <article id="educator-resources">

        <header>
            <h2><span className="preamble">educator</span> Resources</h2>
            <p>Answers to common questions, developed by teachers and NYC DOE staff.</p>
        </header>

        <div className="article-content">
          <ul className="activity-list">
            <ResourceQuery category={category} />
          </ul>
        </div>

      </article>

    </div>
  </Layout>
  )
}

export default Resource
