/**
 * K-2 Integrated Units curriculum
 */

/* Imports */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

/* Component */
const IntegratedUnitsK2 = () => (
  <Layout>
    <SEO title="K-2 Integrated Units" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">

          <header>
            <span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>K-2 Integrated Units</h2></span>
          </header>

          <div className="article-content" style={{textAlign: 'center'}}>
            <iframe title="K-2 Integrated Units intro video" src="https://www.youtube.com/embed/Xh7MmjTEl1k?rel=0" width="640" height="360" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div className="article-content">
            <p>The computer science lessons for the 2020-21 school have been modified to work in both a blended and remote classroom environment. Each lesson folder contains all of the resources required to deliver computer science education to your students. Lesson plans, digital handouts, slide decks, and more are included!</p>
            <div className="submenu">
              <a href="https://drive.google.com/drive/folders/11wVbjlVsbOGR5IUuo2flVMUE1WZJKxSh?usp=sharing" target="blank">
                <div className="btn"><h4>K-2 Integrated Unit (2020-21): Introduction to Computer Science curriculum</h4></div>
              </a>
            </div>
          </div>

          <h3>2019-20 Integrated Unit</h3>
          <div className="article-content">
            <p>Computer Science and Me introduces students to the idea of computers and computing by posing questions such as “What is a computer?” and “How do computers work?" Students learn about the different parts of a computer and their functions (hardware, software). Students explore how computers work by identifying important aspects of computing such as algorithms, programming and abstraction in order to apply their new skills to a culminating final project. Teachers can choose to utilize an online project through the Scratch Jr. platform or an unplugged project that can be integrated into a content area.</p>
            <div className="submenu">
              <a href="https://drive.google.com/open?id=1w4hh73fw2mz1Ma5gzdH8ElvVcCOlV0Mu" target="blank">
                <div className="btn"><h4>K-2 Integrated Unit (2019-20): Computer Science and Me curriculum</h4></div>
              </a>
            </div>
          </div>

          <h3>2018-19 Integrated Unit</h3>
          <div className="article-content">
            <p>Computing Through Time is a unit of computer science instruction that engages students in remixing and creating visual media using procedures on and off the computer. Students learn the basics of how computers function using data, problem solving strategies, and how to create using a visual programming language designed for pre-readers. Every activity gives students time to work hands-on, personalize their work, and be creative while applying CS practices and concepts.</p>
            <div className="submenu">
              <a href="https://drive.google.com/open?id=19l27XWtF_uy9Z2M4UdqESK4F3gAQki3E" target="blank">
                <div className="btn"><h4>K-2 Integrated Unit (2018-19): Computing Through Time curriculum</h4></div>
              </a>
            </div>
          </div>

        </div>
      </article>
    </div>
  </Layout>
)

export default IntegratedUnitsK2
