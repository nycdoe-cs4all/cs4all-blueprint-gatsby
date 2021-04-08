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
    <br/><br/>
    We are working to make this website easier to access for people with
    disabilities, and will follow the{" "}
    <a href="http://www.w3.org/WAI/intro/wcag" target="_blank" rel="noreferrer">
      Web Content Accessibility Guidelines 2.0, Level AA
    </a>.
    <br/>
    If you need assistance with a particular page or document on our current
    site, please email{" "}
    <a href="mailto:dgaylord@strongschools.nyc">Daniel Gaylord</a> for
    assistance.
  </div>
)

export default Footer
