import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const Units35CreatingFromScratch = () => (
  <Layout>
    <SEO title="Units 3-5: Creating from Scratch" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>3-5 Creator: Creating From Scratch</h2></span></header>
          <div className="article-content" style={{textAlign: 'center'}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Zky38KE11H4?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div className="submenu">
            <a href="https://drive.google.com/open?id=1pawMvbbM7RxtzL7QvcQYgAkXP4dSZ9tx" target="blank">
              <div className="btn"><h4>View the 3-5: Creating From Scratch curriculum</h4></div>
            </a>
          </div>

          <div className="article-content">
            <p>Creating From Scratch builds off of the prior Computer Science knowledge that students may possess about concepts. In the first part of the unit, students will be re-introduced to the concepts of hardware/software and input/output. Students will create a Scratch account and begin to explore the platform. In order for students to strengthen their problem solving skills, they will work through the concepts of: algorithms, programming, debugging, loops, conditionals, and abstraction. For each concept, students will receive instruction first through an “unplugged” activity. Then, students will apply their knowledge of the concept to a “plugged” activity via Scratch. Towards the end of the unit, students will be tasked with reverse engineering a Scratch project. Students plan on recreating/reverse engineering the Scratch project seen in a previous lesson. The unit culminates with a final project Hackathon or Codeathon performed over the course of multiple days.</p>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default Units35CreatingFromScratch
