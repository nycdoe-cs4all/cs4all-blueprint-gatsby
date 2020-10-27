import React from "react"
import moment from "moment"
import parse from "html-react-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"
const PostTemplate = (props) => (
 <Layout>
    <SEO title={props.pathContext.title} />
    <article>
        <h3>{props.pathContext.title}</h3>
        <small>{moment(props.pathContext.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</small>
        {parse(props.pathContext.content)}
    </article>
 </Layout>
)
export default PostTemplate
