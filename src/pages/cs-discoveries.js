import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CSDiscoveries = () => (
  <Layout>
    <SEO title="Code.org Computer Science Discoveries" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span class="preamble"><h2 class="title" style="line-height:1;">Code.org Computer Science Discoveries</h2></span></header>
          <div className="article-content">
            <p>Computer Science Discoveries is an introductory computer science course that empowers students to create authentic artifacts and engage with computer science as a medium for creativity, communication, problem-solving, and fun. With a combination of unplugged activities to engage students in logic and introduce basic concepts, students also use a number of digital tools to create projects like websites, games, and apps that include a physical computing component with Adafruit’s Circuit Playground. The course features six units which can be done in a single semester or a full year, and resources can be found online to allow flexibility of in-class meeting time. The course is young, but a strong community of over 500 teachers across the United States participate in forums to help modify the course for a variety of diverse student populations. <a href="https://vimeo.com/251538125">Watch this video</a> and <a href="https://docs.google.com/document/d/1gx99bJIbUr6a43olU_pEBt_M4xkXB4VXv2SL5SPtqj4/edit?usp=sharing">view this fact sheet</a> for more information.</p>

            <div className="submenu">
              <a href="https://code.org/educate/csd" target="blank">
                <div className="btn"><h4>View the Code.org Computer Science Discoveries curriculum</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default CSDiscoveries
