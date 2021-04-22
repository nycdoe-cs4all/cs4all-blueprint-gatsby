/**
 * List of all curriculum that CS4All supports directly or through partners
 */

/* General Imports */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CurriculumCard from "../components/CurriculumCard"

/* Curriculum Data & Pictures */
import curricula from "../data/curricula"

/* Component */
const Curriculum = () => (
  <Layout>
    <SEO title="Curriculum Catalog" />
    <div id="page">
      <article id="explore-units">
        <header>
          <h2>
            <span className="preamble">K-12</span> Curriculum
          </h2>
          <h3>
            Curriculum created and supported by the CS Education Team or one of
            our partners
          </h3>
        </header>

        <div className="article-content">
          <p>
            All CS4All curriculum is aligned to the{" "}
            <a
              href="http://www.nysed.gov/curriculum-instruction/computer-science-and-digital-fluency-learning-standards/"
              target="blank"
              rel="noreferrer"
            >
              New York State K12 Computer Science and Digital Fluency Learning
              Standards
            </a>
            , and we are currently in the process of adding references to these
            standards. These standards were adopted by the Board of Regents in
            December 2020 and it is expected that all schools{" "}
            <a
              href="http://www.nysed.gov/curriculum-instruction/timeline-roll-out-and-implementation"
              target="blank"
              rel="noreferrer"
            >
              fully implement the standards by September 2024
            </a>
          </p>
          <header className="orange-theme">
            <div className="box">
              <div
                className="box-content"
                style={{ padding: "12px", textAlign: "center" }}
              >
                <h3>Elementary School Curriculum</h3>
              </div>
            </div>
          </header>
          <ul className="activity-list">
            {curricula.elementary.map(curriculum => (
              <CurriculumCard
                link={curriculum.link}
                pic={curriculum.pic}
                grade={curriculum.activityGrade}
                title={curriculum.activityTitle}
                devices={curriculum.activityDevices}
                concepts={curriculum.activityConcepts}
                key={curriculum.activityTitle}
              />
            ))}
          </ul>

          <header className="orange-theme">
            <div className="box">
              <div
                className="box-content"
                style={{ padding: "12px", textAlign: "center" }}
              >
                <h3>Middle School Curriculum</h3>
              </div>
            </div>
          </header>
          <ul className="activity-list">
            {curricula.middle.map(curriculum => (
              <CurriculumCard
                link={curriculum.link}
                pic={curriculum.pic}
                grade={curriculum.activityGrade}
                title={curriculum.activityTitle}
                devices={curriculum.activityDevices}
                concepts={curriculum.activityConcepts}
                key={curriculum.activityTitle}
              />
            ))}
          </ul>

          <header className="orange-theme">
            <div className="box">
              <div
                className="box-content"
                style={{ padding: "12px", textAlign: "center" }}
              >
                <h3>High School Curriculum</h3>
              </div>
            </div>
          </header>
          <ul className="activity-list">
            {curricula.high.map(curriculum => (
              <CurriculumCard
                link={curriculum.link}
                pic={curriculum.pic}
                grade={curriculum.activityGrade}
                title={curriculum.activityTitle}
                devices={curriculum.activityDevices}
                concepts={curriculum.activityConcepts}
                key={curriculum.activityTitle}
              />
            ))}
          </ul>
        </div>
        <p>
          For additional curricular options we recommend{" "}
          <a
            href="https://www.csforall.org/projects_and_programs/curriculum_directory/"
            target="_blank"
            rel="noreferrer"
          >
            CSforAll’s AlignCS Curriculum Directory
          </a>
          .
        </p>
      </article>
    </div>
  </Layout>
)

export default Curriculum
