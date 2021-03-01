/**
 * 3-5 Integrated Units curriculum
 */

/* Imports */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

/* Component */
const IntegratedUnits35 = () => (
  <Layout>
    <SEO title="3-5 Integrated Units" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                3-5 Integrated Units
              </h2>
            </span>
          </header>

          <div className="article-content" style={{ textAlign: "center" }}>
            <iframe
              title="3-5 Integrated Units intro video"
              src="https://www.youtube.com/embed/Zky38KE11H4?rel=0"
              width="640"
              height="360"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="article-content">
            <p>
              The computer science lessons for the 2020-21 school have been
              modified to work in both a blended and remote classroom
              environment. Each lesson folder contains all of the resources
              required to deliver computer science education to your students.
              Lesson plans, digital handouts, slide decks, and more are
              included!
            </p>
            <div className="submenu">
              <a
                href="https://drive.google.com/drive/folders/1JufIAUnmyYWq8eDojjBogTWnVqsR7_FH?usp=sharing"
                target="blank"
              >
                <div className="btn">
                  <h4>
                    3-5 Integrated Unit (2020-21): Introduction to Programming
                    curriculum
                  </h4>
                </div>
              </a>
            </div>
          </div>

          <h3>2019-20 Integrated Unit</h3>
          <div className="article-content">
            <p>
              Creating From Scratch builds off of the prior Computer Science
              knowledge that students may possess about concepts. In the first
              part of the unit, students will be re-introduced to the concepts
              of hardware/software and input/output. Students will create a
              Scratch account and begin to explore the platform. In order for
              students to strengthen their problem solving skills, they will
              work through the concepts of: algorithms, programming, debugging,
              loops, conditionals, and abstraction. For each concept, students
              will receive instruction first through an “unplugged” activity.
              Then, students will apply their knowledge of the concept to a
              “plugged” activity via Scratch. Towards the end of the unit,
              students will be tasked with reverse engineering a Scratch
              project. Students plan on recreating/reverse engineering the
              Scratch project seen in a previous lesson. The unit culminates
              with a final project Hackathon or Codeathon performed over the
              course of multiple days.
            </p>
            <div className="submenu">
              <a
                href="https://drive.google.com/open?id=1pawMvbbM7RxtzL7QvcQYgAkXP4dSZ9tx"
                target="blank"
              >
                <div className="btn">
                  <h4>
                    3-5 Integrated Unit (2019-20): Creating From Scratch
                    curriculum
                  </h4>
                </div>
              </a>
            </div>
          </div>

          <h3>2018-19 Integrated Unit</h3>
          <div className="article-content">
            <p>
              Build My City is a unit of computer science instruction that
              engages students in remixing and creating visual media using
              procedures on and off the computer. Students learn the basics of
              how computers function and represent data, problem solving
              strategies, different types of problems, and how visual
              programming languages can be used to create interactive,
              expressive projects. Every activity gives students time to work
              hands-on, personalize their work, and be creative while applying
              CS practices and concepts.
            </p>
            <div className="submenu">
              <a
                href="https://drive.google.com/open?id=1Lcq44di8dXVVhCrTv48OX_0b0-jxrRVW"
                target="blank"
              >
                <div className="btn">
                  <h4>
                    3-5 Integrated Unit (2018-19): Build My City curriculum
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default IntegratedUnits35
