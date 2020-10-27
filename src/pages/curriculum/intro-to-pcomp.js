import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IntroToPComp = () => (
  <Layout>
    <SEO title="Introduction to Physical Computing" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>Introduction to Physical Computing</h2></span></header>
          <div className="article-content">
            <p><iframe title="Course intro video" src="https://player.vimeo.com/video/250914986" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></p>
            <p>Developed by the NYCDOE CS education team, the Introduction to Physical Computing course is a 54-hour long introductory computer science course that guides students to explore fundamental CS concepts through tinkering with the micro:bit, a simple programmable computer device. Each unit of the course guides students through the learning process with three practices: analyzing computer applications around them based on a given issue; prototyping a project that reflects the result of the analysis plus their interest; and communicating about their projects, including the functionality of a project, a project development process, influence from other projects and their contribution to a project when working in a group. The curriculum and support sessions assist educators in discovering the most effective way of facilitating this course for their own classroom, while helping them to become comfortable with the main tool, the micro:bit. <a href="https://vimeo.com/250914986">Watch this video</a> and <a href="https://docs.google.com/document/d/1yVLZ-SDuu-hgxc4MaJqOFwXe2M6tmPfbNk20iixoVgY/edit?usp=sharing">view this fact sheet</a> for more information. Note: DDue to COVID-19 CS4All is exploring PD delivery models and foresees the uncertainty of access to materials. Given all the changing matters, after careful consideration, we must sadly inform you that the CS4All team has decided to cancel the Intro to Physical Computing course in SY 2020-21.</p>

            <div className="submenu">
              <a href="https://drive.google.com/open?id=1-9_AeFCkec2YeEcMhJujIb_jiBazWKgs" target="blank">
                <div className="btn"><h4>View the Introduction to Physical Computing curriculum</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default IntroToPComp
