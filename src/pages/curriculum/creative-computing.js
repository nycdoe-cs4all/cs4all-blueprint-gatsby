/**
 * Creative Computing curriculum
 */

/* Imports */
import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

/* Component */
const CreativeComputing = () => (
  <Layout>
    <Seo title="Creative Computing" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                Creative Computing
              </h2>
            </span>
          </header>

          <div className="article-content">
            <p>
              Creative computing is a 54-hour long introductory project-based
              computer science (CS) course that leads students to explore
              fundamental CS concepts and practices through using{" "}
              <a href="http://scratch.mit.edu" target="blank">
                Scratch
              </a>
              , a block-based programming language. Throughout the course
              students will practice to think like the way computers process and
              learn how to communicate with it. As students create projects with
              Scratch programming, they will learn how to collaborate with their
              peers, present and share their work to/with others, and contribute
              to the larger CS community. This curriculum aligns with the{" "}
              <Link to="/">CS4All Blueprint</Link> for CS education that
              emphasizes a hands-on approach called creative computing.
            </p>

            <div className="submenu">
              <a
                href="https://creativecomputing.gse.harvard.edu/guide/curriculum.html"
                target="blank"
              >
                <div className="btn">
                  <h4>Creative Computing curriculum</h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a
                href="https://docs.google.com/presentation/d/1eh8oHDMQz8XAhyBleR0aDRZJB_EHU-uRKomF8mUkw_o/copy"
                target="blank"
              >
                <div className="btn">
                  <h4>Creative Computing guide</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default CreativeComputing
