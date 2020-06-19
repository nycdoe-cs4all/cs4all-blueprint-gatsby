import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const CodeOrgCSPrinciples = () => (
  <Layout>
    <SEO title="Code.org CS Principles" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>Code.org AP Computer Science Principles</h2></span></header>
          <div className="article-content">
            <p>Code.org AP CSP is a full­-year, approachable, rigorous course that introduces students to foundational CS topics including programming (block and/or text JavaScript), algorithms, the Internet, big data, digital privacy and security, and the societal impacts of computing. Curriculum tools include AppLab, a data analysis/visualization tool, and activity-specific “widgets” (ex. The Internet Simulator). AP CSP’s goal is to create leaders in CS fields and attract traditionally underrepresented students. Through hands-on, collaborative workshops, teachers will reflect on the pedagogy of teaching CS while becoming familiar with the subject. Workshops are accessible to teachers with any or no prior CS experience. <a href="https://vimeo.com/251531251">Watch this video</a> and <a href="https://docs.google.com/document/d/1NC0DCCeM3KmBcDLGDT9PB3eNt5XKxbgPuBDlaA3Vq3c/edit?usp=sharing">view this fact sheet</a> for more information.</p>

            <div className="submenu">
              <a href="https://code.org/educate/csp" className="box" target="blank">
                <div className="box-content"><h4>View the Code.org AP Computer Science Principles curriculum</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default CodeOrgCSPrinciples
