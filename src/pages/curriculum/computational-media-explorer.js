import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ComputationalMediaExplorer = () => (
  <Layout>
    <SEO title="Computational Media Explorer" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>Computational Media Explorer: Computing Through Time</h2></span></header>
          <div className="article-content">
            <p>Computational Media Explorers is a unit of computer science instruction that engages students in remixing and creating visual media using procedures on and off the computer. Students learn the basics of how computers function using data, problem solving strategies, and how to create using a visual programming language designed for pre-readers. Every activity gives students time to work hands-on, personalize their work, and be creative while applying CS practices and concepts.</p>

            <div className="submenu">
              <a href="https://drive.google.com/open?id=19l27XWtF_uy9Z2M4UdqESK4F3gAQki3E" target="blank">
                <div className="btn"><h4>View the Computational Media Explorer curriculum</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default ComputationalMediaExplorer
