/**
 * Tangible Interfaces curriculum
 */

/* Imports */
import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

/* Component */
const TangibleInterfaces = () => (
  <Layout>
    <Seo title="Tangible Interfaces" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                Tangible Interfaces (Pilot)
              </h2>
            </span>
          </header>

          <div className="article-content">
            <p>
              Tangible Interfaces is a 108-hour creative computing course for
              high schools using the open source Javascript library p5.js. In
              the first half of this course, students will learn how to
              interpret raw data and identify the human bias and social
              implications of data use. In the second half of this course,
              students will be introduced to user experience and interface
              design concepts to build projects that make use of the DOM library
              in p5.js to allow for more and refined user control of their
              sketches. Students will also work with simple microcontrollers to
              build physical controllers that enable more interactive and
              accessible experiences for all users.
            </p>
            <p>
              By building accessible visualization tools and interfaces,
              students will expand their computer science (CS) knowledge towards
              the understanding of data democratization and inclusive design.
              This curriculum will make use of the NYC Open Data portal as well
              as weather data APIs. It also aligns with the{" "}
              <Link to="/">CS4All Blueprint</Link> for CS education that
              emphasizes a hands-on approach called creative computing. This
              course is still in development and only available to pilot for
              schools who have implemented Introduction to Computational Media.
            </p>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default TangibleInterfaces
