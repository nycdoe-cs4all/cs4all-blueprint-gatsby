/**
 * Computer Science Principles curriculum
 */

/* Imports */
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

/* Component */
const CSPrinciples = () => (
  <Layout>
    <Seo title="Computer Science Principles" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                Computer Science Principles
              </h2>
            </span>
          </header>

          <div className="article-content">
            <p>
              Computer Science Principles (CSP) is a full­-year, research-backed
              course that introduces students to foundational CS topics
              including programming, algorithms, the Internet, big data, digital
              privacy and security, and the societal impacts of computing. CSP’s
              goal is to create leaders in CS fields and attract traditionally
              underrepresented students. Curricula for this course will also
              prepare students to take the Advanced Placement CS Principles
              exam, you can learn more by checking out the{" "}
              <a
                href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles?course=ap-computer-science-principles"
                target="blank"
              >
                College Board course description
              </a>
              .
            </p>
            <p>
              At hands-on, collaborative workshops, teachers will reflect on the
              pedagogy of teaching CS while becoming familiar with the subject
              and a specific freely available CS Principles curriculum.
              Workshops are accessible to teachers with no CS experience. These
              curricula are aligned to the{" "}
              <a
                href="https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf"
                target="blank"
              >
                CS Principles Framework
              </a>
              .
            </p>

            <div className="submenu">
              <a
                href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles?course=ap-computer-science-principles"
                target="blank"
              >
                <div className="btn">
                  <h4>College Board AP CS Principles website</h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a
                href="https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf"
                target="blank"
              >
                <div className="btn">
                  <h4>College Board AP CS Principles course description</h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a href="http://bjc.edc.org" target="blank">
                <div className="btn">
                  <h4>Beauty and Joy of Computing curriculum</h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a
                href="https://cs.uteach.utexas.edu/computer-science-principles"
                target="blank"
              >
                <div className="btn">
                  <h4>UTeach CS Principles curriculum</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default CSPrinciples
