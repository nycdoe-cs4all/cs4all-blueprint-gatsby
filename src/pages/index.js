/**
 * Main page of the CS4All Blueprint
 */

/* General Imports */
import React, { useState } from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"
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
      <Seo title="CS4All Blueprint" />
      <div id="page">
        <div className="jumbotron">
          <p>
            <a
              className="intro-a"
              href="http://cs4all.nyc"
              target="_blank"
              rel="noreferrer"
            >
              <span className="expander">CS4All</span>
            </a>{" "}
            will ensure that every NYC student receives a meaningful unit of
            computer science education by 2025. With the{" "}
            <Link className="intro-b" to="/about/">
              <span className="expander">Blueprint</span>
            </Link>
            , our educators are making it happen.
          </p>
          <div className=" next box">
            <Link
              className="btn"
              to="#page"
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
            </Link>
          </div>
        </div>

        <div id="cs-in-classroom" className="interior-container">
          <h2>
            <span className="preamble">CS in the</span> Classroom
          </h2>
          <div className="gallery">
            <div id="elementaryWork" className="parentFocus">
              <Link
                to="#elementaryWork"
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
              </Link>
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

            <div id="middleWork" className="parentFocus">
              <Link
                to="#middleWork"
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
              </Link>
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

            <div id="highWork" className="parentFocus">
              <Link
                to="#highWork"
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
              </Link>
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
              The{" "}
              <a
                href="http://www.nysed.gov/curriculum-instruction/computer-science-and-digital-fluency-learning-standards"
                target="blank"
              >
                New York State K12 Computer Science and Digital Fluency Learning
                Standards
              </a>
              {" "}are currently in use in some schools and are expected to be implemented in all schools in the 2024/2025 school year. These standards include{" "}
              <a
                href="https://infohub.nyced.org/in-our-schools/programs/digital-citizenship"
                target="blank"
                rel="noreferrer"
              >
                Digital Citizenship
              </a>
              ,{" "}
              <a
                href="https://nycdoe.libguides.com/home/ESIFC"
                target="blank"
                rel="noreferrer"
              >
                Digital Fluency
              </a>
              , and Computer Science. The Computer Science Standards are being aligned to the{" "}
              <a
                href="/"
              >
                CS4All Blueprint
              </a>
              {" "}to help teachers integrate computational literacy, algorithmic thinking, and problem-solving skills in every classroom and at all grade levels.
            </p>
            <ul className="list-unstyled">
              <li>
                <Link className="box" to="/what-is-cs">
                  <div className="box-content">
                    <span className="icon">
                      <Foundations />
                    </span>
                    <h3>What is CS?</h3>
                    Explanations of computer science concepts and practices with
                    no CS background required!
                  </div>
                </Link>
              </li>

              <li>
                <Link className="box" to="/curriculum">
                  <div className="box-content">
                    <span className="icon">
                      <Units />
                    </span>
                    <h3>CS Curriculum</h3>
                    Find meaningful, engaging, and fun learning experiences for
                    any grade band!
                  </div>
                </Link>
              </li>

              <li>
                <Link className="box" to="/resources">
                  <div className="box-content">
                    <span className="icon">
                      <Resources />
                    </span>
                    <h3>Teacher Tools and Resources</h3>
                    Best practices and answers to common questions for teachers
                    of all experience levels!
                  </div>
                </Link>
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
                <span>CS4All initiative</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
