/**
 * Main page of the CS4All Blueprint
 */

/* General Imports */
import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import scrollTo from "gatsby-plugin-smoothscroll"
import FsLightbox from "fslightbox-react"

import Play from "../assets/svg/icon-play.svg"
import Foundations from "../assets/svg/icon-foundations.svg"
import Units from "../assets/svg/icon-units.svg"
import Resources from "../assets/svg/icon-resources.svg"

/* Video thumbnails */
import elementarySchoolStudentWork from "../assets/images/elementary-school-student-work.png"
import middleSchoolStudentWork from "../assets/images/middle-school-student-work.png"
import highSchoolStudentWork from "../assets/images/high-school-student-work.png"

/* Component */
function IndexPage() {
  /* Variables */
  const [togglerES, setTogglerES] = useState(false)
  const [togglerMS, setTogglerMS] = useState(false)
  const [togglerHS, setTogglerHS] = useState(false)

  /* Display component */
  return (
    <Layout>
      <SEO title="CS4All Blueprint" />
      <div id="page">
        <div className="jumbotron">
          <p>
            <a
              className="intro-a"
              href="http://cs4all.nyc"
              target="_blank"
              rel="noreferrer"
            >
              <span className="expander">CS4ALL</span>
            </a>{" "}
            will ensure that every NYC student receives a meaningful unit of
            computer science education by 2025. With the{" "}
            <a className="intro-b" href="/about/">
              <span className="expander">Blueprint</span>
            </a>
            , our educators are making it happen.
          </p>
          <div className=" next box">
            <a
              className="btn"
              href="#page"
              onClick={e => {
                scrollTo("#what-is-blueprint")
                e.preventDefault()
              }}
              onKeyPress={() => {
                scrollTo("#what-is-blueprint")
                return false
              }}
              role="button"
              tabIndex="0"
            >
              <span className="preamble">Show me</span> how
            </a>
          </div>
        </div>

        <div id="cs-in-classroom" className="interior-container">
          <h2>
            <span className="preamble">CS in the</span> Classroom
          </h2>
          <div className="gallery">
            <div id="elementaryWork">
              <a
                href="#elementaryWork"
                onClick={e => {
                  setTogglerES(!togglerES)
                  e.preventDefault()
                }}
              >
                <div className="preview-image">
                  <span className="icon">
                    <Play />
                  </span>
                  <img
                    src={elementarySchoolStudentWork}
                    alt="elementary school preview"
                  />
                </div>
                <h3>
                  Elementary School{" "}
                  <span className="subtitle">Student Work</span>
                </h3>
              </a>
              <FsLightbox
                toggler={togglerES}
                sources={[
                  <iframe
                    title="Elementary School Student Work"
                    src="https://player.vimeo.com/video/226674454?autoplay=1"
                    width="1920px"
                    height="1080px"
                    frameborder="0"
                    allowfullscreen
                    allow="autoplay; fullscreen"
                  ></iframe>,
                ]}
              />
            </div>

            <div id="middleWork">
              <a
                href="#middleWork"
                onClick={e => {
                  setTogglerMS(!togglerMS)
                  e.preventDefault()
                }}
              >
                <div className="preview-image">
                  <span className="icon">
                    <Play />
                  </span>
                  <img
                    src={middleSchoolStudentWork}
                    alt="middle school preview"
                  />
                </div>
                <h3>
                  Middle School <span className="subtitle">Student Work</span>
                </h3>
              </a>
              <FsLightbox
                toggler={togglerMS}
                sources={[
                  <iframe
                    title="Middle School Student Work"
                    src="https://player.vimeo.com/video/231736989?autoplay=1"
                    width="1920px"
                    height="1080px"
                    frameborder="0"
                    allowfullscreen
                    allow="autoplay; fullscreen"
                  ></iframe>,
                ]}
              />
            </div>

            <div id="highWork">
              <a
                href="#highWork"
                onClick={e => {
                  setTogglerHS(!togglerHS)
                  e.preventDefault()
                }}
              >
                <div className="preview-image">
                  <span className="icon">
                    <Play />
                  </span>
                  <img src={highSchoolStudentWork} alt="high school preview" />
                </div>
                <h3>
                  High School <span className="subtitle">Student Work</span>
                </h3>
              </a>
              <FsLightbox
                toggler={togglerHS}
                sources={[
                  <iframe
                    title="High School Student Work"
                    src="https://player.vimeo.com/video/226674594?autoplay=1"
                    width="1920px"
                    height="1080px"
                    frameborder="0"
                    allowfullscreen
                    allow="autoplay; fullscreen"
                  ></iframe>,
                ]}
              />
            </div>
          </div>
        </div>

        <div id="what-is-blueprint" className="light-theme">
          <div className="interior-container">
            <h2>
              <span className="preamble">What is the</span> Blueprint?
            </h2>
            <p>
              We are currently refining our student outcomes and curriculum to
              support the release of the{" "}
              <a
                href="http://www.nysed.gov/curriculum-instruction/computer-science-and-digital-fluency-learning-standards"
                target="blank"
              >
                New York State K12 Computer Science and Digital Fluency Learning
                Standards
              </a>{" "}
              . These standards were adopted by the Board of Regents in December
              2020 and it is expected that all schools{" "}
              <a
                href="http://www.nysed.gov/curriculum-instruction/timeline-roll-out-and-implementation"
                target="blank"
                rel="noreferrer"
              >
                fully implement the standards by September 2024.
              </a>
            </p>
            <ul className="list-unstyled">
              <li>
                <a className="box" href="/what-is-cs">
                  <div className="box-content">
                    <span className="icon">
                      <Foundations />
                    </span>
                    <h3>Explanations of CS concepts &amp; practices.</h3>
                    No CS background required!
                  </div>
                </a>
              </li>

              <li>
                <a className="box" href="/curriculum">
                  <div className="box-content">
                    <span className="icon">
                      <Units />
                    </span>
                    <h3>CS Curriculum</h3>
                    Learn how educators are integrating meaningful CS learning
                    experiences at all grade bands and subjects.
                  </div>
                </a>
              </li>

              <li>
                <a className="box" href="/resources">
                  <div className="box-content">
                    <span className="icon">
                      <Resources />
                    </span>
                    <h3>Tools for teachers of all experience levels.</h3>
                    Preparing your first lesson incorporating CS? Looking for
                    classroom management tips? We’ve got you covered.
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="interior-container">
          <div className="exit-links">
            <div className="box">
              <a
                className="btn"
                href="https://docs.google.com/a/strongschools.nyc/forms/d/e/1FAIpQLScrFYHGQltaZ8taqnOc81RM6rhswS171zpsRyKaUMCxkP1ZDQ/viewform"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <span className="preamble">Get notified about</span>{" "}
                <span>educator trainings</span>
              </a>
            </div>
            <div className="box">
              <a
                className="btn"
                href="http://cs4all.nyc/"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <span className="preamble">Learn more about the</span>{" "}
                <span>CS4ALL initiative</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
