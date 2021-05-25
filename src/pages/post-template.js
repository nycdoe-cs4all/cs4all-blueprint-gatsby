/**
 * Template used for all wordpress posts (educator resources)
 */

/* Imports */
import React from "react"
import moment from "moment"
import parse from "html-react-parser"
import Layout from "../components/layout"
import SEO from "../components/seo"

/* Component */
const PostTemplate = props => (
  <Layout>
    <SEO title={props.pageContext.title} />
    <div id="page">
      <article className="light-theme">
        <div className="col-md-12">
          <header>
            <span className="preamble">
              <h2
                className="title"
                style={{ lineHeight: 1 }}
                dangerouslySetInnerHTML={{ __html: props.pageContext.title }}
              />
            </span>
          </header>

          <div className="article-content">
            <small style={{ display: "none" }}>
              {moment(props.pageContext.date).format(
                "dddd, MMMM Do YYYY, h:mm:ss a"
              )}
            </small>
            {typeof props.pageContext.content !== "string"
              ? ""
              : parse(props.pageContext.content)}
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default PostTemplate
