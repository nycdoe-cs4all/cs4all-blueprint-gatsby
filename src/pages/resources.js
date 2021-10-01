import React, { useState } from "react"
import { Link } from 'gatsby'
import ResourceFilterList from "../components/resource-filter-list"
import ResourceQuery from "../components/resource-query"
import Layout from "../components/layout"
import Seo from "../components/seo"

function Resource(props) {
  const [category, changeCategory] = useState("All")

  return (
    <Layout>
      <Seo title="Educator Resources" />
      <div id="page">
        <ResourceFilterList changeCategory={e => changeCategory(e)} />
        <article id="educator-resources">
          <header>
            <h2>
              <span className="preamble">educator</span> Resources
            </h2>
            <h3>
              Answers to common questions, examples of best practices, and
              sample lessons, developed by Blueprint Fellows and NYC DOE staff.
            </h3>
          </header>

          <div className="article-content">
            <p
              className="sub-head"
              data-desktop="(Use the filter to the left to more easily find the resources you need!)"
            >
              These resources were created and vetted by the{" "}
              <Link to="/about#fellow-list">Blueprint Fellows</Link> and the CS
              Education Team, for additional resources created by teachers in
              the CS Leads program visit the{" "}
              <a
                href="https://sites.google.com/strongschools.nyc/cs4allschoolleaders/home"
                target="_blank"
                rel="noreferrer"
              >
                School Leaders Website
              </a>
            </p>

            <ul className="activity-list">
              <ResourceQuery category={category} />
            </ul>
          </div>
          <div className="article-content">
            <p>
              We are currently working on improving our resources and guides for
              families as well! When finished you'll be able to find them on the{" "}
              <a href="http://cs4all.nyc/" target="_blank" rel="noreferrer">
                CS4All Website
              </a>
              .
            </p>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default Resource
