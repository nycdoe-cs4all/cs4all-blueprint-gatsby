import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const UTeachCSPrinciples = () => (
  <Layout>
    <SEO title="UTeach CS Principles" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>UTeach AP Computer Science Principles</h2></span></header>
          <div className="article-content">
            <p>UTeach Computer Science Principles (CSP) is a yearlong high school course that addresses the seven Big Ideas and six Computational Thinking Practices specified by the College Board’s AP Computer Science Principles Curriculum Framework. UTeach CSP is a complete, classroom-ready curriculum that contains comprehensive teacher materials that rely on delivery models that are flexible and easy for teachers to use in a variety of high school classroom settings. The curriculum is designed to be taught using a  project-based approach to engage all students. In fact, it is designed specifically to engage women and other historically underrepresented students in the field of computer science. <a href="https://vimeo.com/251561230">Watch this video</a> and <a href="https://docs.google.com/document/d/1o13nZacKxCFX83AKoDK8gTohSx7rcXQBfv5chAYgqV0/edit?usp=sharing">view this fact sheet</a> for more information.</p>
            <div className="submenu">
              <a href="https://cs.uteach.utexas.edu/curriculum-and-teacher-materials" className="box" target="blank">
                <div className="box-content"><h4>View the UTeach AP Computer Science Principles curriculum</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default UTeachCSPrinciples
