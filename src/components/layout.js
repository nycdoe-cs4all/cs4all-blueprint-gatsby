/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/* General Imports */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

/* Component Imports*/
import Navbar from "./navbar"
import Footer from "./footer"

/* Stylesheet Imports */
import "./style.css"
import "./style-typography.css"
import "./style-animations.css"
import "./style-navbar.css"
import "./style-footer.css"
import "./style-filterMenu.css"
import "./style-gridDisplay.css"
import "./style-index.css"
import "./style-about.css"
import "./style-outcomes.css"
import "./style-colorScheme.css"
import "./style-responsive.css"

/* Component */
const Layout = ({ children }) => {
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  /* Display component */
  return (
    <>
      <script src="//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"></script>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Droid+Sans|Droid+Serif|Roboto+Mono|Syncopate|Ubuntu|Ubuntu+Condensed"
        rel="stylesheet"
      />
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
