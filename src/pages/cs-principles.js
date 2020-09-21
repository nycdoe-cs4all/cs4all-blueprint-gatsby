import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CSPrinciples = () => (
  <Layout>
    <SEO title="CS Principles" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>Computer Science Principles</h2></span></header>
          <div className="article-content">
            <p>CS Principles (CSP) is a full­-year, research-backed course that introduces students to foundational CS topics including programming, algorithms, the Internet, big data, digital privacy and security, and the societal impacts of computing. CSP’s goal is to create leaders in CS fields and attract traditionally underrepresented students. The curriculum for this course will also prepare students to take the Advanced Placement CS Principles exam, you can learn more by checking out the course's <a href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles?course=ap-computer-science-principles">fact sheet</a>.</p>
            <p>At hands-on, collaborative workshops, teachers will reflect on the pedagogy of teaching CS while becoming familiar with the subject and a specific freely available CS Principles curriculum. Workshops are accessible to teachers with no CS experience. This curriculum is aligned to the <a href="https://apcentral.collegeboard.org/pdf/ap-computer-science-principles-course-and-exam-description.pdf">CS Principles Framework</a>. See the curriculum and PD on it's <a href="https://drive.google.com/open?id=1akagsLmAbPhX74cFij9V4hinPHWOOZsGc-QlvJW_qhc">fact sheet</a>.</p>

            <div className="submenu">
              <a href="http://bjc.edc.org" target="blank">
                <div className="btn"><h4>View the Beauty and Joy of Computing curriculum</h4></div>
              </a>
              <a href="https://cs.uteach.utexas.edu/computer-science-principles" target="blank">
                <div className="btn"><h4>View the UTeach CS Principles curriculum</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default CSPrinciples
