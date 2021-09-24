/**
 * Software Engineering Program sequence/curriculum
 */

/* Imports */
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

/* Component */
const SoftwareEngineeringProgram = () => (
  <Layout>
    <Seo title="Software Engineering Program" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                Software Engineering Program
              </h2>
            </span>
          </header>

          <div className="article-content">
            <p>
              The Software Engineering Program (SEP) is a multi-year,
              comprehensive, standards-aligned computer science education
              program for grades 6 to 12. The goals of the program are:
            </p>
            <ul>
              <li>
                Increase the number of high school graduates, particularly from
                traditionally underrepresented groups, that are ready to pursue
                new and emerging technology-driven roles across industries.
              </li>
              <li>
                Develop student computational thinking and problem-solving
                skills in real-world contexts.
              </li>
            </ul>
            <p>
              {" "}
              The SEP curriculum gives students instruction and experience in
              the following areas: computer programming, robotics, web design,
              physical computing, and game design. SEP students participate in
              local and central hackathons, and in work-based experiences with
              major industry leaders and partners.
            </p>
            <p>
              {" "}
              Starting in the 2019-20 school year, SEP will undergo a shift that
              will allow schools to incrementally build the sequence on a
              timeline that fits their needs. For both middle and high schools,
              the NYC DOE CS education team will offer training annually
              (depending on need) on curriculum for each year of the sequence
              giving schools have access to the full sequence each year. The
              following curriculum make up the middle and high school SEP
              sequences:
            </p>

            <h3>Middle School</h3>
            <ul>
              <li>
                <a href="/curriculum/creative-computing">Creative Computing</a>
              </li>
              <li>
                <a href="/curriculum/creative-web">Creative Web</a> OR{" "}
                <a href="/curriculum/intro-to-pcomp">
                  Introduction to Physical Computing
                </a>
              </li>
              <li>Web Games (coming soon)</li>
            </ul>

            <h3>High School</h3>
            <ul>
              <li>
                <a href="/curriculum/intro-to-computational-media">
                  Introduction to Computational Media
                </a>
              </li>
              <li>
                <a href="/curriculum/tangible-interfaces">
                  Tangible Interfaces
                </a>{" "}
                OR Physical Computing and the Digital Self (coming soon)
              </li>
              <li>
                <a href="/curriculum/cs-principles">
                  Computer Science Principles (Advanced Placement optional)
                </a>
              </li>
              <li>
                <a href="/curriculum/cs-and-the-city">CS and the City</a> OR{" "}
                <a href="/curriculum/cs-a">Advanced Placement CS A</a>
              </li>
            </ul>

            <h3>Resourses</h3>
            <div className="submenu">
              <a
                href="https://drive.google.com/drive/u/0/folders/0B8D2ft9M8qQCamQwZGpJMEU2TEk"
                target="blank"
              >
                <div className="btn">
                  <h4>2016-2019 Software Engineering Program curriculum</h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a
                href="https://drive.google.com/drive/u/0/folders/0B8D2ft9M8qQCYXY2V3VndWNob0E"
                target="blank"
              >
                <div className="btn">
                  <h4>
                    2016-2019 Software Engineering Program professional
                    development materials
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

export default SoftwareEngineeringProgram
