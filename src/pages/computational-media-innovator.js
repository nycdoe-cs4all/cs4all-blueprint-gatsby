import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const ComputationalMediaInnovator = () => (
  <Layout>
    <SEO title="Computational Media Innovator" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>Computational Media Innovator: Learning to Program, Programming to Learn</h2></span></header>
          <div className="article-content">
            <p>Computational Media Explorers is a unit of computer science instruction that engages students in remixing and creating visual media using procedures on and off the computer. Students learn how computers represent and can transform data, problem solving strategies, the difference between algorithms and instructions, and how to collaborate on building projects using visual programming language. Every activity gives students time to work hands-on, personalize their work, and be creative while applying CS practices and concepts.</p>

            <div className="submenu">
              <a href="https://drive.google.com/open?id=13UILetzsFCj5f5lkS01FKmagj30RieR8" target="blank">
                <div className="btn"><h4>View the Computational Media Innovator curriculum</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default ComputationalMediaInnovator
