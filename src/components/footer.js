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
        <CreativeCommons/>
      </span>
      This work is licensed under a Creative Commons
      Attribution-NonCommercial-ShareAlike 4.0 International License.
    </a>
  </div>
)

export default Footer
