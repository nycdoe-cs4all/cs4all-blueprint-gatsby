import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WhatIsCS = () => (
  <Layout>
    <SEO title="What Is CS?" />
    <article className="light-theme">
      {/* <script src="/static/js/floatMenu.js"></script>
      <div className="col-md-3" id="floatMenu"> */}
      <header><h2><span className="preamble">What is</span> CS education?</h2></header>
      <div className="article-content">
        <p>Computer science (CS) is the study of the capabilities and limitations of computers. Computational literacy is the ability to understand how CS can be applied in all walks of life. New York City public school students develop computational literacy through <a href="https://blueprint.cs4all.nyc/resources/29/">creative computing</a>.</p>

        <p>Each <a href="https://blueprint.cs4all.nyc/resources/31/">meaningful unit</a> of CS education combines three core components in 10-25 hours of instructional time:</p>
        <ul className="list-unstyled submenu">
          <li className="blue">
            <a className="box" href="/perspectives/">
              <div className="box-content">
                <div className="icon-set">
                  <span className="icon"><svg><use xlinkHref="#icon-explorer" /></svg></span>
                  <span className="icon"><svg><use xlinkHref="#icon-creator" /></svg></span>
                  <span className="icon"><svg><use xlinkHref="#icon-innovator" /></svg></span>
                  <span className="icon"><svg><use xlinkHref="#icon-citizen" /></svg></span>
                </div>
                <h3>Perspectives</h3>
                The different stages of CS learning describe how and why your students will tackle a computing task.
              </div>
            </a>
          </li>

          <li className="green">
            <a className="box" href="/practices/">
              <div className="box-content">
                <div className="icon-set">
                  <span className="icon"><svg><use xlinkHref="#icon-analyze" /></svg></span>
                  <span className="icon"><svg><use xlinkHref="#icon-prototype" /></svg></span>
                  <span className="icon"><svg><use xlinkHref="#icon-communicate" /></svg></span>
                </div>
                <h3>Practices</h3>
                The interdependent methods and skills students will need to master in order to solve a problem, answer a question, or express themselves.
              </div>
            </a>
          </li>

          <li className="orange">
            <a className="box" href="/concepts/">
              <div className="box-content">
                <div className="icon-set">
                  <span className="icon"><svg><use xlinkHref="#icon-algorithm" /></svg></span>
                  <span className="icon"><svg><use xlinkHref="#icon-programming" /></svg></span>
                  <span className="icon"><svg><use xlinkHref="#icon-data" /></svg></span>
                  <span className="icon"><svg><use xlinkHref="#icon-network" /></svg></span>
                </div>
                <h3>Concepts</h3>
                The big ideas students will explore in the process, and better understand when they're done.
              </div>
            </a>
          </li>
        </ul>

        <p>Combined, a perspective, practice, and concept describe a new capability students will take away from the unit, and suggest a number of practical skills they've learned in the process. We call these "I Can" statements.</p>
        <div className="submenu">
          <a href="/outcomes/" className="box">
            <div className="box-content">
              <div className="icon-set">
                <span className="icon"></span>
                <span className="icon"><svg><use xlinkHref="#icon-communicate" /></svg></span>
                <span className="icon"><svg><use xlinkHref="#icon-abstraction" /></svg></span>
              </div>
              <h3>Student Outcomes</h3>
              Proficiencies gained through the study of computer science, articulated from students' point of view.
            </div>
          </a>
        </div>
      </div>
    </article>

    <div className="interior-container">
      <div className="exit-menu">
        <ol className="list-unstyled">
          <li className="current"><a href="">CS&nbsp;Education</a></li>
          <li>
            <div className="box">
              <a className="btn btn-primary btn-lg" href="/perspectives/" role="button">Next: <span className="preamble">We&rsquo;ll look at</span> Perspectives, <span className="preamble">and see how students approach CS education at different stages.</span></a>
            </div>
          </li>
          <li><a className="box" href="/practices/" role="button"><span className="box-content">Practices</span></a></li>
          <li><a className="box" href="/concepts/" role="button"><span className="box-content">Concepts</span></a></li>
          <li><a className="box" href="/outcomes/" role="button"><span className="box-content">Outcomes</span></a></li>
        </ol>
      </div>
    </div>
  </Layout>
)
export default WhatIsCS
