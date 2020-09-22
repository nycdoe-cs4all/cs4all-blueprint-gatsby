import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ExploringCS = () => (
  <Layout>
    <SEO title="Exploring CS" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>Exploring Computer Science</h2></span></header>
          <div className="article-content">
            <p><iframe title="Course intro video" src="https://blueprint.cs4all.nyc/static/videos/ecs2019-20.mp4#t=0.5" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></p>
            <p>Exploring Computer Science is a yearlong course developed around a framework of both computer science content and computational practice. Assignments and instruction are contextualized to be socially relevant and meaningful for diverse students. Units utilize a variety of tools/platforms and culminate with final projects around Human-Computer Interaction, Problem Solving, Web Design (HTML, CSS), Programming (Scratch, Edware), Computing & Data Analysis, and Robotics. ECS is recognized nationally as a preparatory course for AP Computer Science Principles. <a href="https://vimeo.com/251542546">Watch this video</a> and <a href="https://docs.google.com/document/d/1Whvp_SJzRH7OSd1IUbd43XePmcrvi73tfMt1kkas1Yk/edit?usp=sharing">view this fact sheet</a> for more information.</p>

            <div className="submenu">
              <a href="http://www.exploringcs.org/for-teachers-districts/curriculum" target="blank">
                <div className="btn"><h4>View the Exploring Computer Science curriculum</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default ExploringCS
