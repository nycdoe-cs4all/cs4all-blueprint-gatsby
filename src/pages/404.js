/**
 * 404 page if user goes to a sub page that does not exist
 */

/* Imports */
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

/* Component */
const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div id="page">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
