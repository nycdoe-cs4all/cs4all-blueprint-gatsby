import { React, Component } from "react"
import { useParams } from "@reach/router"
import { Link, graphql } from "gatsby"
import moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"
const parse = require('html-react-parser')

const params = useParams().resourceId
export const query = graphql`
{
    wordpressPost(id: String!) {
        id
        slug
        title
        content
        date
    }
}
`


const EducatorResource = ({ data }) => (
  <Layout>
     <SEO title={data.title + "| Educator Resources"} />
     <article id="educator-resource">
       <header>
        <h2>{data.title}</h2>
        <p>{moment(data.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
       </header>
       <div className="article-content">
        {parse(data.content)}
      </div>
    </article>
</Layout>
)

export default EducatorResource
