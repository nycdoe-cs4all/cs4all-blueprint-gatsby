import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const UnitsK2ComputerScienceAndMe = () => (
 <Layout>
    <SEO title="Units K2: Computer Science and Me" />
    <div id="page">
      <article className="light-theme">
      <div className="col-md-12">
        <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>K-2 Explorer: Computer Science and Me</h2></span></header>
        <div className="article-content" style={{textAlign: 'center'}}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Xh7MmjTEl1k?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="submenu">
          <a href="https://drive.google.com/open?id=1w4hh73fw2mz1Ma5gzdH8ElvVcCOlV0Mu" target="blank">
            <div className="btn">
              <h4>View the K-2: Computer Science and Me curriculum</h4>
            </div>
          </a>
        </div>
        <div className="article-content">
          <p>Computer Science and Me introduces students to the idea of computers and computing by posing questions such as “What is a computer?” and “How do computers work?" Students learn about the different parts of a computer and their functions (hardware, software). Students explore how computers work by identifying important aspects of computing such as algorithms, programming and abstraction in order to apply their new skills to a culminating final project. Teachers can choose to utilize an online project through the Scratch Jr. platform or an unplugged project that can be integrated into a content area.</p>
        </div>
      </div>
    </article>
    </div>
 </Layout>
)
export default UnitsK2ComputerScienceAndMe
