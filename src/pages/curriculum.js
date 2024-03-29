/**
 * List of all curriculum that CS4All supports directly or through partners
 */

/* General Imports */
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CurriculumCard from "../components/CurriculumCard"

/* Curriculum Data and Pictures */
import curricula from "../data/curricula"

/* Component */
const Curriculum = () => (
  <Layout>
    <Seo title="Curriculum Catalog" />
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
          <p className="sub-head">
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
          <header className="orange-theme">
            <div className="box">
              <div
                className="box-content"
                style={{ padding: "12px", textAlign: "center" }}
              >
                <h3>Curriculum for Grades K-5</h3>
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
                available={curriculum.activityOffered}
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
                <h3>Curriculum for Grades 6-8</h3>
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
                available={curriculum.activityOffered}
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
                <h3>Curriculum for Grades 9-14+</h3>
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
                available={curriculum.activityOffered}
                devices={curriculum.activityDevices}
                concepts={curriculum.activityConcepts}
                key={curriculum.activityTitle}
              />
            ))}
          </ul>
        </div>
        {/*<p>
          For additional curricular options we recommend{" "}
          <a
            href="https://www.csforall.org/projects_and_programs/curriculum_directory/"
            target="_blank"
            rel="noreferrer"
          >
            CSforAll’s AlignCS Curriculum Directory
          </a>
          .
        </p>*/}
      </article>
    </div>
  </Layout>
)

export default Curriculum
