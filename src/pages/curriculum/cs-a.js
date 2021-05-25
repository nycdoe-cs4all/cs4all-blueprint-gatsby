/**
 * Advanced Placement Computer Science-A curriculum
 */

/* Imports */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

/* Component */
const APCSA = () => (
  <Layout>
    <SEO title="Advanced Placement CS-A" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                Advanced Placement Computer Science A
              </h2>
            </span>
          </header>

          <div className="article-content">
            <p>
              Advanced Placement (AP) Computer Science (CS)-A is a full­-year, college-level course
              that allows students to deepen their understanding of computer
              science concepts. The AP CS-A curriculum covers problem solving,
              design strategies and methodologies, organization of data,
              approaches to processing data, analysis of potential solutions,
              and the ethical and social implications of computing. The course
              emphasizes both object-oriented and imperative problem-solving and
              design. Read more on the College Board's{" "}
              <a
                href="http://media.collegeboard.com/digitalServices/pdf/ap/ap-computer-science-a-course-description.pdf"
                target="blank"
              >
                course description
              </a>
              .
            </p>
            <p>
              NYCDOE will prepare teachers to deliver the TEALS program AP CS-A
              curriculum. To help teachers build a strong base in Java, the
              object-oriented language used in CS-A, DOE is collaborating with
              Oracle Academy to provide educator professional development via
              the Oracle Academy training programs. These courses are focused in
              Java and AP CS A teachers are encouraged to register and attend as
              a means of supporting Java content knowledge. This training is
              available to teachers with previous experience in CS.
            </p>
            <p>
              See our curriculum and PD on its{" "}
              <a
                href="https://docs.google.com/document/d/1PAywfah-XVojzPqnDxbV0lj1112MRkbV1esFFnK5oEg/edit?usp=sharing"
                target="blank"
              >
                fact sheet
              </a>
              .
            </p>
            <div className="submenu">
              <a
                href="http://media.collegeboard.com/digitalServices/pdf/ap/ap-computer-science-a-course-description.pdf"
                target="blank"
              >
                <div className="btn">
                  <h4>College Board AP CS-A course description</h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a href="https://tealsk12.gitbook.io/apcsa/" target="blank">
                <div className="btn">
                  <h4>TEALS AP CS-A curriculum</h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a
                href="https://docs.google.com/document/d/1PAywfah-XVojzPqnDxbV0lj1112MRkbV1esFFnK5oEg/edit?usp=sharing"
                target="blank"
              >
                <div className="btn">
                  <h4>AP CS-A fact sheet</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default APCSA
