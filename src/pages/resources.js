import React, { useState } from "react"
import ResourceFilterList from "../components/resource-filter-list"
import ResourceQuery from "../components/resource-query"
import Layout from "../components/layout"
import SEO from "../components/seo"

function Resource(props) {
  const [category, changeCategory] = useState("All")

  return (
    <Layout>
      <SEO title="Educator Resources" />
      <div id="page">
        <ResourceFilterList changeCategory={e => changeCategory(e)} />
        <article id="educator-resources">
          <header>
            <h2>
              <span className="preamble">educator</span> Resources
            </h2>
            <h3>
              Answers to common questions, developed by Blueprint Fellows and
              NYC DOE staff.
            </h3>
          </header>

          <div className="article-content">
            <p>
              These resources were created and vetted by the{" "}
              <a href="/about#fellow-list">Blueprint Fellows</a>{" "}
              and the CS Education Team, for additional resources created by
              teachers in the CS Leads program visit their site &lt;Link Coming
              Soon!&gt;
            </p>

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
