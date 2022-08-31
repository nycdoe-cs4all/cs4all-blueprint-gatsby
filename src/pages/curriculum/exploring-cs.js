/**
 * Exploring Computer Science curriculum
 */

/* Imports */
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

/* Component */
const ExploringCS = () => (
  <Layout>
    <Seo title="Exploring Computer Science" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                Exploring Computer Science
              </h2>
            </span>
          </header>

          <div className="article-content" style={{ textAlign: "center" }}>
            <iframe
              title="Exploring Computer Science intro video"
              src="https://player.vimeo.com/video/251542546"
              width="640"
              height="360"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>

          <div className="article-content">
            <p>
              Exploring Computer Science (ECS) is a yearlong course developed
              around a framework of both computer science content and
              computational practice. Assignments and instruction are
              contextualized to be socially relevant and meaningful for diverse
              students. Units utilize a variety of tools/platforms and culminate
              with final projects around Human-Computer Interaction, Problem
              Solving, Web Design (HTML, CSS), Programming (Scratch, Edware),
              Computing and Data Analysis, and Robotics. ECS is recognized
              nationally as a preparatory course for AP Computer Science
              Principles.
            </p>
            <p>
              <a href="https://vimeo.com/251542546" target="blank">
                Watch this video
              </a>{" "}
              for more information.
            </p>

            <div className="submenu">
              <a
                href="http://www.exploringcs.org/for-teachers-districts/curriculum"
                target="blank"
              >
                <div className="btn">
                  <h4>Exploring Computer Science curriculum</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default ExploringCS
