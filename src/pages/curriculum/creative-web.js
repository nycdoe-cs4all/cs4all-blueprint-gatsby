/**
 * Creative Web curriculum
 */

/* Imports */
import React from "react"
import { Link } from 'gatsby'
import Layout from "../../components/layout"
import Seo from "../../components/seo"

/* Component */
const CreativeWeb = () => (
  <Layout>
    <Seo title="Creative Web" />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2 className="title" style={{ lineHeight: 1 }}>
                Creative Web
              </h2>
            </span>
          </header>

          <div className="article-content">
            <p>
              Creative Web is a 54-hour long middle school curriculum that leads
              students to build expressive and interactive computer applications
              and media that run in a browser. Students will learn how
              information or applications are displayed on web by studying
              hypertext and stylesheets and then learn how to make their own
              expressive and interactive website using the open source
              Javascript library p5.js. As students utilize online references
              and learn from others’ projects, they will understand the openness
              of the creative coding community, practice respectful manners of
              participating in it and consider how they can contribute to the
              larger CS community. This curriculum aligns with the{" "}
              <Link to="/">CS4All Blueprint</Link> for CS
              education that emphasizes a hands-on approach called creative
              computing.
            </p>
            <p>
              See the{" "}
              <a
                href="https://docs.google.com/document/d/1gsdxFQ6xLnD4fQIvN3O6L0yYHvduJKBhobJ-dVaiXhQ/edit?usp=sharing"
                target="blank"
              >
                Creative Web fact sheet
              </a>{" "}
              for more information.
            </p>

            <h3>Resourses</h3>
            <div className="submenu">
              <a
                href="https://drive.google.com/drive/folders/11F_yCTMnJzJbTq4CPXBAhKbGQ9Ic8Vpe"
                target="blank"
              >
                <div className="btn">
                  <h4>
                    Creative Web curriculum and professional development
                    materials
                  </h4>
                </div>
              </a>
            </div>
            <div className="submenu">
              <a
                href="https://docs.google.com/document/d/1gsdxFQ6xLnD4fQIvN3O6L0yYHvduJKBhobJ-dVaiXhQ/edit?usp=sharing"
                target="blank"
              >
                <div className="btn">
                  <h4>Creative Web fact sheet</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default CreativeWeb
