import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const CriticalComputing = () => (
  <Layout>
    <SEO title="Critical Computing" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>Critical Computing</h2></span></header>
          <div className="article-content">
            <p>Critical computing is a 54-hour long introductory computer science (CS) course that provides students a chance to share their stories and better understand each other using critical thinking and computing. Students will study identity,  or the social categorizations of people, to foster an appreciation for and an understanding of self, others and the power of diversity.  They will examine how social categorizations impact computing systems and devices. In addition, students will explore CS concepts through Scratch, a creative computing platform, and use CS as a tool to advocate for marginalized communities.</p>

            <div className="submenu">
              <a href="https://docs.google.com/document/d/1qgkpHJ-Q_A8rca5Rl9nSfKEQAmJIV-bxK77b8NQfiF8/edit?usp=sharing" target="blank">
                <div className="btn"><h4>View the Critical Computing fact sheet</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default CriticalComputing
