/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import Footer from "./Footer"
import "./style.css"

import '../images/svg/icon-foundations.svg'
import '../images/svg/icon-units.svg'
import '../images/svg/icon-resources.svg'
import '../images/svg/icon-blueprint.svg'
import '../images/svg/logo-cs4all.svg'
import '../images/svg/icon-menu.svg'

import '../images/svg/icon-cc-by-nc-sa.svg'

import '../images/svg/icon-play.svg'

import explorerIcon from '../images/svg/icon-explorer.svg'
import '../images/svg/icon-creator.svg'
import '../images/svg/icon-innovator.svg'
import '../images/svg/icon-citizen.svg'

import '../images/svg/icon-analyze.svg'
import '../images/svg/icon-prototype.svg'
import '../images/svg/icon-communicate.svg'

import '../images/svg/icon-abstraction.svg'
import '../images/svg/icon-algorithm.svg'
import '../images/svg/icon-programming.svg'
import '../images/svg/icon-data.svg'
import '../images/svg/icon-network.svg'

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

  return (
    <>
      <script src="//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"></script>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Droid+Sans|Droid+Serif|Roboto+Mono|Syncopate|Ubuntu|Ubuntu+Condensed" rel="stylesheet" />
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
