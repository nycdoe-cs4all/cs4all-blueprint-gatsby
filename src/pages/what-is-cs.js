/**
 * Overall description of what CS education is in reference to an experience
 * and/or unit of study and how it incorporates the CS Concepts, Practices, and
 * Perspectives as well as the Student Outcomes
 */

/* Imports */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Explorer from "../assets/svg/icon-explorer.svg"
import Creator from "../assets/svg/icon-creator.svg"
import Innovator from "../assets/svg/icon-innovator.svg"
import Citizen from "../assets/svg/icon-citizen.svg"
import Analyze from "../assets/svg/icon-analyze.svg"
import Prototype from "../assets/svg/icon-prototype.svg"
import Communicate from "../assets/svg/icon-communicate.svg"
import Abstraction from "../assets/svg/icon-abstraction.svg"
import Algorithm from "../assets/svg/icon-algorithm.svg"
import Programming from "../assets/svg/icon-programming.svg"
import Data from "../assets/svg/icon-data.svg"
import Network from "../assets/svg/icon-network.svg"

/* Component */
const WhatIsCS = () => (
  <Layout>
    <SEO title="What Is Computer Science?" />
    <div id="page">
      <article className="light-theme">
        <header>
          <h2>
            <span className="preamble">What is</span> CS education?
          </h2>
        </header>

        <div className="article-content">
          <p>
            Computer science (CS) is the study of the capabilities and
            limitations of computers. Computational literacy is the ability to
            understand how CS can be applied in all walks of life. New York City
            public school students develop computational literacy through{" "}
            <a href="/resources/what-is-creative-computing/">
              creative computing
            </a>
            .
          </p>
          <p>
            Each <a href="/resources/meaningful-cs-unit/">meaningful unit</a> of
            CS education combines three core components in 10-25 hours of
            instructional time:
          </p>
          <ul className="list-unstyled submenu">
            <li className="blue">
              <a className="box" href="/perspectives/">
                <div className="box-content">
                  <div className="icon-set">
                    <span className="icon">
                      <Explorer/>
                    </span>
                    <span className="icon">
                      <Creator/>
                    </span>
                    <span className="icon">
                      <Innovator/>
                    </span>
                    <span className="icon">
                      <Citizen/>
                    </span>
                  </div>
                  <h3>Perspectives</h3>
                  The different stages of CS learning describe how and why your
                  students will tackle a computing task.
                </div>
              </a>
            </li>

            <li className="green">
              <a className="box" href="/practices/">
                <div className="box-content">
                  <div className="icon-set">
                    <span className="icon">
                      <Analyze/>
                    </span>
                    <span className="icon">
                      <Prototype/>
                    </span>
                    <span className="icon">
                      <Communicate/>
                    </span>
                  </div>
                  <h3>Practices</h3>
                  The interdependent methods and skills students will need to
                  master in order to solve a problem, answer a question, or
                  express themselves.
                </div>
              </a>
            </li>

            <li className="orange">
              <a className="box" href="/concepts/">
                <div className="box-content">
                  <div className="icon-set">
                    <span className="icon">
                      <Algorithm/>
                    </span>
                    <span className="icon">
                      <Programming/>
                    </span>
                    <span className="icon">
                      <Data/>
                    </span>
                    <span className="icon">
                      <Network/>
                    </span>
                  </div>
                  <h3>Concepts</h3>
                  The big ideas students will explore in the process, and better
                  understand when they're done.
                </div>
              </a>
            </li>
          </ul>
          <p>
            Combined, a perspective, practice, and concept describe a new
            capability students will take away from the unit, and suggest a
            number of practical skills they've learned in the process. We call
            these "I Can" statements.
          </p>

          <div className="submenu">
            <a href="/outcomes/" className="box">
              <div className="box-content">
                <div className="icon-set">
                  <span className="icon"></span>
                  <span className="icon">
                    <Communicate/>
                  </span>
                  <span className="icon">
                    <Abstraction/>
                  </span>
                </div>
                <h3>Student Outcomes</h3>
                Proficiencies gained through the study of computer science,
                articulated from students' point of view.
              </div>
            </a>
          </div>
        </div>
      </article>

      <div className="interior-container">
        <div className="exit-menu">
          <ol className="list-unstyled">
            <li className="current">
              <a href="/what-is-cs/">CS&nbsp;Education</a>
            </li>
            <li>
              <div className="box">
                <a
                  className="btn btn-primary btn-lg"
                  href="/perspectives/"
                  role="button"
                >
                  Next: <span className="preamble">We&rsquo;ll look at</span>{" "}
                  Perspectives,{" "}
                  <span className="preamble">
                    and see how students approach CS education at different
                    stages.
                  </span>
                </a>
              </div>
            </li>
            <li>
              <a className="box" href="/practices/" role="button">
                <span className="box-content">Practices</span>
              </a>
            </li>
            <li>
              <a className="box" href="/concepts/" role="button">
                <span className="box-content">Concepts</span>
              </a>
            </li>
            <li>
              <a className="box" href="/outcomes/" role="button">
                <span className="box-content">Outcomes</span>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </Layout>
)

export default WhatIsCS
