import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const TEALSIntroToCS = () => (
  <Layout>
    <SEO title="TEALS Introduction to Computer Science" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>TEALS Introduction to Computer Science</h2></span></header>
          <div className="article-content">
            <p>The Introduction to Computer Science curriculum is based on the University of California at Berkeley CS 10 course, “Beauty and Joy of Computing” (BJC). TEALS has worked closely with UC Berkeley’s CS department to adapt BJC as a flexible and approachable introductory programming course for a wide range of high school students from diverse backgrounds. The course has been successfully implemented in hundreds of high schools nationwide. This introductory computer science course is not the same as the BJC AP CS Principles course. The two courses share a pedagogical philosophy, as well as the Snap! programming environment. <a href="https://docs.google.com/document/d/1Qs9AZfcKwfOPiYT9Ysn_t2MbI67EZzxLhlZnap-yxpw/edit?usp=sharing">View this fact sheet</a> for more information.</p>

            <div className="submenu">
              <a href="https://tealsk12.gitbook.io/intro-cs" target="blank">
                <div className="btn"><h4>View the TEALS curriculum</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default TEALSIntroToCS
