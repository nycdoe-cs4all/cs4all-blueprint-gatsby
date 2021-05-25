/**
 * Software Engineering Program Junior sequence/curriculum
 */

/* Imports */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

/* Component */
const SoftwareEngineeringProgramJr = () => (
  <Layout>
    <SEO title="Software Engineering Program Junior" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                Software Engineering Program Junior
              </h2>
            </span>
          </header>

          <div className="article-content">
            <p>
              The Software Engineering Program Junior (SEPjr) is a high-quality
              computer science program for kindergarten through fifth-grade
              students that balances rigorous and meaningful direct instruction
              with open-ended creative computing.
            </p>
            <p>
              Teachers and students engage in foundational computer science
              concepts through teacher-directed lessons and the application of
              computer science, including through open-ended creative computing
              platforms such as Scratch, robotics and maker education. The SEPjr
              curriculum is aligned with the the CS4All Blueprint concepts and
              practices, with an emphasis on Explorer and Creator perspectives.
            </p>

            <h3>Resourses</h3>
            <div className="submenu">
              <a
                href="https://sites.google.com/strongschools.nyc/sepjrnyc/"
                target="blank"
              >
                <div className="btn">
                  <h4>
                    SEPjr curriculum and professional development materials
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default SoftwareEngineeringProgramJr
