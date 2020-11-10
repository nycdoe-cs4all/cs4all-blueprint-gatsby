import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import k2Units from "../assets/images/k2-units.jpg"
import three5Units from "../assets/images/35-units.jpg"
import six8Units from "../assets/images/68-units.jpg"
import elementary_2 from "../assets/images/elementary_2.jpg"
import three5buildMyCity from "../assets/images/pic1.jpg"
import sepJr from "../assets/images/pic14.jpg"
import six8unitOld from "../assets/images/high_2a.jpg"
import creativeComputing from "../assets/images/creative-computing.gif"
import creativeWeb from "../assets/images/creative-web.gif"
import criticalComputing from "../assets/images/critical-computing.png"
import physicalComputing from "../assets/images/intro-to-pcomp.gif"
import csDiscoveries from "../assets/images/csDiscoveries.jpg"
import sepHackathon from "../assets/images/SEP-Hackathon.jpg"
import bootstrapDataScience from "../assets/images/bootstrap-data-science.png"
import tangibleInterfaces from "../assets/images/tangible-interfaces.gif"
import exploringCS from "../assets/images/exploringCS.jpeg"
import teals from "../assets/images/TEALS.gif"
import introToCompMedia from "../assets/images/intro-to-comp-media.gif"
import csP from "../assets/images/cs-principles.jpg"
import csA from "../assets/images/cs-a.gif"
import csAndTheCity from "../assets/images/cs-and-the-city.gif"

const Curriculum = () => (
  <Layout>
    <SEO title="Curriculum" />
    <article id="explore-units">
      <header>
        <h2><span className="preamble">K-12</span> Curriculum</h2>
        <p></p>
      </header>
      <div className="article-content">
        <ul className="activity-list">

          <li>
            <a href="/curriculum/units-k2-computer-science-and-me">
              <div className="preview"><img src={k2Units} alt="grades K-2 innovator unit" /></div>
              <h3>
                <span className="activity-grade">Grades K-2</span>
                <span className="activity-title">K-2 Integrated Unit: Computing Science and Me</span>
              </h3>
              <span className="activity-devices">16-20 Hour Unit</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/units-35-creating-from-scratch">
              <div className="preview"><img src={three5Units} alt="grades 3-5 innovator unit" /></div>
              <h3>
                <span className="activity-grade">Grades 3-5</span>
                <span className="activity-title">3-5 Integrated Unit: Creating From Scratch</span>
              </h3>
              <span className="activity-devices">16-20 Hour Unit</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/units-68-innovative-programming">
              <div className="preview"><img src={six8Units} alt="grades 6-8 innovator unit" /></div>
              <h3>
                <span className="activity-grade">Grades 6-8</span>
                <span className="activity-title">6-8 Integrated Unit: Innovative Programming</span>
              </h3>
              <span className="activity-devices">16-20 Hour Unit</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/computational-media-explorer">
              <div className="preview"><img src={elementary_2} alt="computational media explorer unit" /></div>
              <h3>
                <span className="activity-grade">Grades K-2</span>
                <span className="activity-title">Computational Media Explorer: Computing Through Time</span>
              </h3>
              <span className="activity-devices">16-20 Hour Unit</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/computational-media-creator">
              <div className="preview"><img src={three5buildMyCity} alt="computational media creator unit" /></div>
              <h3>
                <span className="activity-grade">Grades 3-5</span>
                <span className="activity-title">Computational Media Creator: Build My City</span>
              </h3>
              <span className="activity-devices">16-20 Hour Unit</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/software-engineering-program-jr">
              <div className="preview"><img src={sepJr} alt="Software Engineering Program Jr" /></div>
              <h3>
                <span className="activity-grade">Grades K-5</span>
                <span className="activity-title">Software Engineering Program Junior</span>
              </h3>
              <span className="activity-devices">K-5 Sequence</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data, Networks</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/computational-media-innovator">
              <div className="preview"><img src={six8unitOld} alt="Computational Media Innovator" /></div>
              <h3>
                <span className="activity-grade">Grades 6-8</span>
                <span className="activity-title">Computational Media Innovator: Learning to Program, Programming to Learn</span>
              </h3>
              <span className="activity-devices">16-20 Hour Unit</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/creative-computing/">
              <div className="preview"><img src={creativeComputing} alt="Creative Computing" /></div>
              <h3>
                <span className="activity-grade">Grade 6</span>
                <span className="activity-title">Creative Computing</span>
              </h3>
              <span className="activity-devices">Software Engineering Program: 54 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/critical-computing/">
              <div className="preview"><img src={criticalComputing} alt="Critical Computing" /></div>
              <h3>
                <span className="activity-grade">Grade 6</span>
                <span className="activity-title">Critical Computing</span>
              </h3>
              <span className="activity-devices">Software Engineering Program: 54 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/creative-web/">
              <div className="preview"><img src={creativeWeb} alt="Creative Web" /></div>
              <h3>
                <span className="activity-grade">Grade 7</span>
                <span className="activity-title">Creative Web</span>
              </h3>
              <span className="activity-devices">Software Engineering Program: 54 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data, Networks</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/intro-to-pcomp/">
              <div className="preview"><img src={physicalComputing} alt="Introduction to Physical Computing" /></div>
              <h3>
                <span className="activity-grade">Grade 7</span>
                <span className="activity-title">Introduction to Physical Computing</span>
              </h3>
              <span className="activity-devices">Software Engineering Program: 54 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data, Networks</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/cs-discoveries">
              <div className="preview"><img src={csDiscoveries} alt="Code.org CS Discoveries" /></div>
              <h3>
                <span className="activity-grade">Grades 6-8</span>
                <span className="activity-title">Code.org CS Discoveries</span>
              </h3>
              <span className="activity-devices">108 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data, Networks</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/software-engineering-program/">
              <div className="preview"><img src={sepHackathon} alt="Software Engineering Program" /></div>
              <h3>
                <span className="activity-grade">Grade 6-12</span>
                <span className="activity-title">Software Engineering Program</span>
              </h3>
              <span className="activity-devices">6-12 Sequence</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/bootstrap-data-science">
              <div className="preview"><img src={bootstrapDataScience} alt="Bootstrap Data Science" /></div>
              <h3>
                <span className="activity-grade">Grades 9-10</span>
                <span className="activity-title">Bootstrap: Data Science</span>
              </h3>
              <span className="activity-devices">54 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/exploring-cs">
              <div className="preview"><img src={exploringCS} alt="Exploring Computer Science" /></div>
              <h3>
                <span className="activity-grade">Grades 9-10</span>
                <span className="activity-title">Exploring Computer Science</span>
              </h3>
              <span className="activity-devices">108 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data, Networks</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/teals-intro-to-cs">
              <div className="preview"><img src={teals} alt="TEALS Introduction to Computer Science" /></div>
              <h3>
                <span className="activity-grade">Grade 9-10</span>
                <span className="activity-title">TEALS Introduction to Computer Science</span>
              </h3>
              <span className="activity-devices">54 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/intro-to-computational-media">
              <div className="preview"><img src={introToCompMedia} alt="Introduction to Computational Media" /></div>
              <h3>
                <span className="activity-grade">Grade 9-10</span>
                <span className="activity-title">Introduction to Computational Media</span>
              </h3>
              <span className="activity-devices">Software Engineering Program: 108 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/tangible-interfaces">
              <div className="preview"><img src={tangibleInterfaces} alt="Introduction to Computational Media" /></div>
              <h3>
                <span className="activity-grade">Grade 10-11</span>
                <span className="activity-title">Tangible Interfaces (Pilot)</span>
              </h3>
              <span className="activity-devices">Software Engineering Program: 108 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data, Networks</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/cs-principles">
              <div className="preview"><img src={csP} alt="Computer Science Principles" /></div>
              <h3>
                <span className="activity-grade">Grades 10-12</span>
                <span className="activity-title">Computer Science Principles (Advanced Placement optional)</span>
              </h3>
              <span className="activity-devices">108 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data, Networks</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/cs-a">
              <div className="preview"><img src={csA} alt="CS A" /></div>
              <h3>
                <span className="activity-grade">Grades 11-12</span>
                <span className="activity-title">Advanced Placement Computer Science A</span>
              </h3>
              <span className="activity-devices">108 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data, Networks</span>
            </a>
          </li>

          <li>
            <a href="/curriculum/cs-and-the-city">
              <div className="preview"><img src={csAndTheCity} alt="CS and the City" /></div>
              <h3>
                <span className="activity-grade">Grades 11-12</span>
                <span className="activity-title">CS and the City</span>
              </h3>
              <span className="activity-devices">108 Hour Course</span>
              <span className="activity-concepts">Concepts: Abstraction, Algorithms, Programming, Data, Networks</span>
            </a>
          </li>
        </ul>
      </div>
    </article>
  </Layout>
)
export default Curriculum
