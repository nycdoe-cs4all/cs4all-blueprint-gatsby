import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BootstrapDataScience = () => (
  <Layout>
    <SEO title="Bootstrap Data Science" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>Bootstrap: Data Science</h2></span></header>
          <div className="article-content" style={{textAlign: 'center'}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0DvKWmJrEGg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div className="article-content">
            <p>Bootstrap: Data Science is a 54-hour long introductory computer science (CS) sequence that applies statistical modeling, rigorous introductory programming, and analysis to real-world datasets, allowing participants to answer questions that they care about and use data to back up their conclusions. Participants learn sound programming practices and statistics, and use bar charts, pie charts, histograms, scatter plots, measures of center, and linear regression to create a research paper on a topic of their choice. <a href="https://www.youtube.com/watch?v=0DvKWmJrEGg">Watch this video</a> and <a href="https://docs.google.com/document/d/1NzVVaR5ufXbrXBl2hlmQtGUlj1U1a-jikC-W74cuR9g/edit?usp=sharing">view this fact sheet</a> for more information.</p>

            <div className="submenu">
              <a href="https://www.bootstrapworld.org/materials/fall2019/courses/data-science/en-us/" target="blank">
                <div className="btn"><h4>View the Bootstrap: Data Science curriculum</h4></div>
              </a>
            </div>
            <div className="submenu">
              <a href="https://docs.google.com/document/d/1NzVVaR5ufXbrXBl2hlmQtGUlj1U1a-jikC-W74cuR9g/edit?usp=sharing" target="blank">
                <div className="btn"><h4>View the Bootstrap: Data Science fact sheet</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default BootstrapDataScience
