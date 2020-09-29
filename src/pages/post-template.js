import React from "react"
import moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/seo"
const PostTemplate = (props) => (
 <Layout>
    <SEO title={props.title} />
    <article>
        <h3>{props.title}</h3>
        <small>{moment(props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</small>
        <p>{props.content}</p>
    </article>
 </Layout>
)
export default PostTemplate
