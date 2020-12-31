/**
 * Navigation bar component that is
 * used on the top of every page
 */

/* Imports */
import React from "react"

/* Component display */
const Navbar = () => (
  <div id="masthead">

    /* CS4All Logo */
    <div id="logo">
      <a href="/">
        <h1>
          <span className="icon"><svg><use xlinkHref="#logo-cs4all" /></svg></span>
          <span className="label"></span>
        </h1>
      </a>
    </div>

    <nav id="menu">
      /* Hamburger menu (only seen on phone-sized screen) */
      <h2>
        <a className="toggle" href="#menu">
          <span className="icon"><svg><use xlinkHref="#icon-menu" /></svg></span>
          <span className="label">Menu</span>
        </a>
      </h2>

      /* Navbar icons (changes orientation based on screen size) */
      <div className="site-menu">
        <ul>
          <li className="compressed parent-menu">
            <a href="/what-is-cs">
              <span className="icon"><svg><use xlinkHref="#icon-foundations" /></svg></span>
              <span className="preamble">CS</span> Foundations
              <span className="caret"></span>
            </a>
            <ul>
              <li><a href="/what-is-cs"><span className="preamble">What is</span> CS Education?</a></li>
              <li><a href="/perspectives"><span className="preamble">CS</span> Perspectives</a></li>
              <li><a href="/practices"><span className="preamble">CS</span> Practices</a></li>
              <li><a href="/concepts"><span className="preamble">CS</span> Concepts</a></li>
              <li><a href="/outcomes"><span className="preamble">Student</span> Outcomes</a></li>
            </ul>
          </li>
          <li>
            <a href="/curriculum">
              <span className="icon"><svg><use xlinkHref="#icon-units" /></svg></span>
              <span className="preamble">curriculum</span> Catalog
            </a>
          </li>
          <li>
            <a href="/resources">
              <span className="icon"><svg><use xlinkHref="#icon-resources" /></svg></span>
              <span className="preamble">Educator</span> Resources
            </a>
          </li>
          <li>
            <a href="/about">
              <span className="icon"><svg><use xlinkHref="#icon-blueprint" /></svg></span>
              <span className="preamble">About</span> Blueprint
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Navbar
