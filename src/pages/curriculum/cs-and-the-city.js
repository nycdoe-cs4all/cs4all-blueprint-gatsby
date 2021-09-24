/**
 * CS and the City curriculum
 */

/* Imports */
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

/* Component */
const CSAndTheCity = () => (
  <Layout>
    <Seo title="CS and the City" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                CS and the City
              </h2>
            </span>
          </header>

          <div className="article-content">
            <p>
              CS and the City is a full-year capstone computer science (CS)
              course during which students will engage with civic issues in
              their communities by building a computational artifact with{" "}
              <a href="https://opendata.cityofnewyork.us/data/" target="blank">
                New York City Open Data
              </a>
              . Students will explore and engage with the NYC Open Data portal
              and the agencies that provide data, utilize data to better
              understand civic issues in their communities, and build
              interactive, industry-standard websites using open datasets.{" "}
            </p>
            <p>
              All students should understand how computer science concepts and
              practices impact their lives, their friends’ lives, and their
              families’ lives. NYC Open Data all government open data, can help
              provide that perspective because it is created by their
              communities or is directly linked to things in their communities -
              like trees, parks, schools, businesses. This curriculum aligns
              with the{" "}
              <a href="/">CS4All Blueprint</a> for CS
              education that emphasizes a hands-on approach called creative
              computing.
            </p>
            <p>
              See the{" "}
              <a
                href="https://drive.google.com/open?id=1ox7rRrPuk0jUariAyczz-eiTwXX3w_aZWXi8-auHKBY"
                target="blank"
              >
                CS and the City fact sheet
              </a>{" "}
              for more information.
            </p>

            <h3>Resourses</h3>
            <div className="submenu">
              <a
                href="https://github.com/upperlinecode/CS-and-the-City-Curriculum"
                target="blank"
              >
                <div className="btn">
                  <h4>CS and the City curriculum</h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a
                href="https://drive.google.com/open?id=1ox7rRrPuk0jUariAyczz-eiTwXX3w_aZWXi8-auHKBY"
                target="blank"
              >
                <div className="btn">
                  <h4>CS and the City fact sheet</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default CSAndTheCity
