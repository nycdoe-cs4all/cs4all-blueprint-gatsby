import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const CreativeWeb = () => (
  <Layout>
    <SEO title="Creative Web" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header><span className="preamble"><h2 className="title"  style={{lineHeight: 1}}>Creative Web</h2></span></header>
          <div className="article-content">
            <p>Creative Web is a 54-hour long middle school curriculum that leads students to build expressive and interactive computer applications and media that run in a browser. Students will learn how information or applications are displayed on web by studying hypertext and stylesheets and then learn how to make their own expressive and interactive website using the open source Javascript library p5.js. As students utilize online references and learn from others’ projects, they will understand the openness of the creative coding community, practice respectful manners of participating in it and consider how they can contribute to the larger CS community. This curriculum aligns with the <a href="https://blueprint.cs4all.nyc">CS4All Blueprint</a> for CS education that emphasizes a hands-on approach called creative computing. See the Creative Web <a href="https://docs.google.com/document/d/1gsdxFQ6xLnD4fQIvN3O6L0yYHvduJKBhobJ-dVaiXhQ/edit?usp=sharing" target="blank">fact sheet</a> for more general information.</p>

            <div className="submenu">
              <a href="https://drive.google.com/drive/folders/11F_yCTMnJzJbTq4CPXBAhKbGQ9Ic8Vpe" target="blank">
                <div className="btn"><h4>View the Creative Web curriculum and professional development materials</h4></div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)
export default CreativeWeb
