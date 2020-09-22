import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ComputationalMediaCreator = () => (
  <Layout>
    <SEO title="Computational Media Creator" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>Computational Media Creator: Build My City</h2></span></header>
          <div className="article-content">
            <p>Computational Media Creators is a unit of computer science instruction that engages students in remixing and creating visual media using procedures on and off the computer. Students learn the basics of how computers function and represent data, problem solving strategies, different types of problems, and how visual programming languages can be used to create interactive, expressive projects. Every activity gives students time to work hands-on, personalize their work, and be creative while applying CS practices and concepts.</p>

            <div className="submenu">
              <a href="https://drive.google.com/open?id=1Lcq44di8dXVVhCrTv48OX_0b0-jxrRVW" target="blank">
                <div className="btn"><h4>View the Computational Media Creator curriculum</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default ComputationalMediaCreator
