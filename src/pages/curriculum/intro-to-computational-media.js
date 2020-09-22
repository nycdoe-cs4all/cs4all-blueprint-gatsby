import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IntroToCompMedia = () => (
  <Layout>
    <SEO title="Introduction to Computational Media" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>Introduction to Computational Media</h2></span></header>
          <div className="article-content">
            <p><iframe src="https://player.vimeo.com/video/251337307" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></p>
            <p>Developed by the NYCDOE CS education team, the Introduction to Computational Media is a yearlong (108 hours) creative computing course for high schools using the open source Javascript library p5.js. By understanding how code can be a medium for creative expression, students will learn the fundamentals of computer science while designing and prototyping interactive projects that run on a browser. Additionally, students will learn how HTML/CSS elements can interact with p5.js to fully take advantage of developing content for a browser. This course has been implemented in NYC schools via <a href="http://cs4all.nyc/programs/sequences/">CS4All’s Software Engineering Program (SEP)</a>, revised by classroom teachers with guidance from the Processing Foundation, and aligns with the CS4All Blueprint for CS education that emphasizes a hands-on CS approach called creative computing. <a href="https://vimeo.com/251337307">Watch this video</a> and <a href="https://docs.google.com/document/d/1WuFtlG2lb4NFtOCaQ0xjYlK_3juZ54GReBw_fEteTWA/edit?usp=sharing">view this fact sheet</a> for more information.</p>

            <div className="submenu">
              <a href="https://nycdoe-cs4all.github.io/" target="blank">
                <div className="btn"><h4>View the Introduction to Computational Media curriculum</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default IntroToCompMedia
