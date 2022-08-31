/**
 * Advanced Placement Computer Science-A curriculum
 */

/* Imports */
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

/* Component */
const APCSA = () => (
  <Layout>
    <Seo title="Advanced Placement CS-A" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                Advanced Placement Computer Science A
              </h2>
            </span>
          </header>

          <div className="article-content">
            <p>
              AP Computer Science A (AP CSA) is an introductory college-level
              computer science course using the programming language of Java.
              Students cultivate their understanding of coding through
              analyzing, writing, and testing code as they explore concepts like
              modularity, variables, and control structures. Across the entire
              course, students are immersed in the big ideas including
              implementing Java primitive types, using objects, boolean
              expressions, if statements, and iteration, as well as writing
              classes. Students will also be immersed in the Java creation of
              arrays, arraylists, 2D arrays, inheritance, and recursion.
              Students in AP CSA practices object-oriented computational
              thinking and creative problem solving while being deeply immersed
              in Java programming. Learn more about the course on the{" "}
              <a
                href="http://media.collegeboard.com/digitalServices/pdf/ap/ap-computer-science-a-course-description.pdf"
                target="blank"
              >
                College Board course description
              </a>
              .
            </p>

            <div className="submenu">
              <a
                href="https://apcentral.collegeboard.org/courses/ap-computer-science-a/course"
                target="blank"
              >
                <div className="btn">
                  <h4>College Board AP CSA Course</h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a
                href="https://csawesome.runestone.academy/runestone/books/published/csawesome/index.html"
                target="blank"
              >
                <div className="btn">
                  <h4>CSAwesome AP CSA Curriculum</h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a
                href="https://tealsk12.github.io/introduction-to-computer-science/"
                target="blank"
              >
                <div className="btn">
                  <h4>TEALS AP CS-A curriculum</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default APCSA
