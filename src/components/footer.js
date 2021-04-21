/**
 * Footer component that is
 * used on the bottom of every page
 */

/* Imports */
import React from "react"

import CreativeCommons from "../assets/svg/icon-cc-by-nc-sa.svg"

/* Component */
const Footer = () => (
  <div id="footer">  
    The DOE is committed to creating and supporting learning environments that
    reflect the diversity of New York City. To ensure that our website serves
    the needs of everyone, it follows the{" "}
    <a href="http://www.w3.org/WAI/intro/wcag" target="_blank" rel="noreferrer">
      Web Content Accessibility Guidelines 2.0, Level AA
    </a>
    . That means the sites work for people with disabilities, including those
    who are blind and partially sighted.
    <br />
    <br />
    We are committed to creating accessible digital experiences for all website
    visitors. If you need assistance with a particular page or document on our
    current site, please email{" "}
    <a href="mailto:dgaylord@strongschools.nyc">Daniel Gaylord</a> for
    assistance.
    <br />
    <br />
    <a
      href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
      target="_blank"
      rel="license noreferrer"
    >
      <span className="icon">
        <CreativeCommons />
      </span>
      This work is licensed under a Creative Commons
      Attribution-NonCommercial-ShareAlike 4.0 International License.
    </a>
  </div>
)

export default Footer
