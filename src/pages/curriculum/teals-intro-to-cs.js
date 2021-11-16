/**
 * TEALS Introduction to Computer Science curriculum
 */

/* Imports */
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

/* Component */
const TEALSIntroToCS = () => (
  <Layout>
    <Seo title="TEALS Introduction to Computer Science" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                TEALS Introduction to Computer Science
              </h2>
            </span>
          </header>

          <div className="article-content">
            <p>
              The Introduction to Computer Science curriculum is based on the
              University of California at Berkeley CS 10 course, “Beauty and Joy
              of Computing” (BJC). TEALS has worked closely with UC Berkeley’s
              computer science (CS) department to adapt BJC as a flexible and
              approachable introductory programming course for a wide range of
              high school students from diverse backgrounds. The course has been
              successfully implemented in hundreds of high schools nationwide.
              This introductory computer science course is not the same as the
              BJC AP CS Principles course. The two courses share a pedagogical
              philosophy, as well as the Snap! programming environment.
            </p>
            <p>
              See the{" "}
              <a
                href="https://docs.google.com/document/d/1Qs9AZfcKwfOPiYT9Ysn_t2MbI67EZzxLhlZnap-yxpw/edit?usp=sharing"
                target="blank"
              >
                TEALS Introduction to Computer Science fact sheet
              </a>{" "}
              for more information.
            </p>

            <h3>Resourses</h3>
            <div className="submenu">
              <a href="https://tealsk12.github.io/introduction-to-computer-science/" target="blank">
                <div className="btn">
                  <h4>TEALS Introduction to Computer Science curriculum: Snap! Semester</h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a href="https://tealsk12.github.io/2nd-semester-introduction-to-computer-science/" target="blank">
                <div className="btn">
                  <h4>TEALS Introduction to Computer Science curriculum: Python Semester</h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a
                href="https://docs.google.com/document/d/1Qs9AZfcKwfOPiYT9Ysn_t2MbI67EZzxLhlZnap-yxpw/edit?usp=sharing"
                target="blank"
              >
                <div className="btn">
                  <h4>TEALS Introduction to Computer Science fact sheet</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default TEALSIntroToCS
