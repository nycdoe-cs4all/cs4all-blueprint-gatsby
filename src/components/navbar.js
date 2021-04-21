/**
 * Navigation bar component that is
 * used on the top of every page
 */

/* Imports */
import React, { useState } from "react"

import Foundations from "../assets/svg/icon-foundations.svg"
import Units from "../assets/svg/icon-units.svg"
import Resources from "../assets/svg/icon-resources.svg"
import Blueprint from "../assets/svg/icon-blueprint.svg"
import Logo from "../assets/svg/logo-cs4all.svg"
import Menu from "../assets/svg/icon-menu.svg"

/* Component */
const Navbar = () => {
  /* Variables */
  const [menuState, setMenuState] = useState(false)

  /* Display component */
  return (
    <div id="masthead">
      {/* CS4All Logo */}
      <div id="logo">
        <a href="/">
          <h1>
            <span className="icon">
              <Logo/>
            </span>
            <span className="label"></span>
          </h1>
        </a>
      </div>

      <nav id="menu" className={menuState ? "active" : ""}>
        {/* Hamburger menu (only seen on phone-sized screen) */}
        <h2>
          <a
            className="toggle"
            href="#menu"
            onClick={() => {
              setMenuState(!menuState)
              return false
            }}
            role="button"
          >
            <span className="icon">
              <Menu/>
            </span>
            <span className="label">Menu</span>
          </a>
        </h2>

        {/* Navbar icons (changes orientation based on screen size) */}
        <div className="site-menu">
          <ul>
            <li className="compressed parent-menu">
              <a href="/what-is-cs">
                <span className="icon">
                  <Foundations/>
                </span>
                <span className="preamble">CS</span> Foundations
              </a>
              <ul>
                {/*<li>
                  <a href="/what-is-cs">
                    <span className="preamble">What is</span> CS Education?
                  </a>
                </li>*/}
                <li>
                  <a href="/perspectives">
                    <span className="preamble">CS</span> Perspectives
                  </a>
                </li>
                <li>
                  <a href="/practices">
                    <span className="preamble">CS</span> Practices
                  </a>
                </li>
                <li>
                  <a href="/concepts">
                    <span className="preamble">CS</span> Concepts
                  </a>
                </li>
                <li>
                  <a href="/outcomes">
                    <span className="preamble">Student</span> Outcomes
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/curriculum">
                <span className="icon">
                  <Units/>
                </span>
                <span className="preamble">Curriculum</span> Catalog
              </a>
            </li>
            <li>
              <a href="/resources">
                <span className="icon">
                  <Resources/>
                </span>
                <span className="preamble">Educator</span> Resources
              </a>
            </li>
            <li>
              <a href="/about">
                <span className="icon">
                  <Blueprint/>
                </span>
                <span className="preamble">About</span> Blueprint
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
