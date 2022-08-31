/**
 * Bootstrap: Data Science curriculum
 */

/* Imports */
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

/* Component */
const BootstrapDataScience = () => (
  <Layout>
    <Seo title="Bootstrap: Data Science" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                Bootstrap: Data Science
              </h2>
            </span>
          </header>

          <div className="article-content" style={{ textAlign: "center" }}>
            <iframe
              title="Bootstrap: Data Science intro video"
              src="https://www.youtube.com/embed/0DvKWmJrEGg"
              width="640"
              height="360"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="article-content">
            <p>
              Bootstrap: Data Science is a 54-hour long introductory computer
              science (CS) sequence that applies statistical modeling, rigorous
              introductory programming, and analysis to real-world datasets,
              allowing participants to answer questions that they care about and
              use data to back up their conclusions. Participants learn sound
              programming practices and statistics, and use bar charts, pie
              charts, histograms, scatter plots, measures of center, and linear
              regression to create a research paper on a topic of their choice.
            </p>
            <p>
              <a
                href="https://www.youtube.com/watch?v=0DvKWmJrEGg"
                target="blank"
              >
                Watch this video
              </a>{" "}
              for more information.
            </p>

            <div className="submenu">
              <a
                href="https://www.bootstrapworld.org/materials/fall2019/courses/data-science/en-us/"
                target="blank"
              >
                <div className="btn">
                  <h4>Bootstrap: Data Science curriculum</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default BootstrapDataScience
