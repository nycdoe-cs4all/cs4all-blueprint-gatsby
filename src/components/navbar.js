/**
 * Navigation bar component that is
 * used on the top of every page
 */

/* Imports */
import React, { useState } from "react"
import { Link } from "gatsby"

import Foundations from "../assets/svg/icon-foundations.svg"
import Units from "../assets/svg/icon-units.svg"
import Resources from "../assets/svg/icon-resources.svg"
import Blueprint from "../assets/svg/icon-blueprint.svg"
import Logo from "../assets/images/nycps-cs4all.png"
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
        <Link to="/">
          <h1>
            <span className="icon">
              <img
                src={Logo}
                alt="New York City Public Schools Computer Science For All logo"
              />
            </span>
            <span className="label"></span>
          </h1>
        </Link>
      </div>

      <nav id="menu" className={menuState ? "active" : ""}>
        {/* Hamburger menu (only seen on phone-sized screen) */}
        <h2>
          <Link
            className="toggle"
            to="#menu"
            onClick={() => {
              setMenuState(!menuState)
              return false
            }}
            role="button"
          >
            <span className="icon">
              <Menu />
            </span>
            <span className="label">Menu</span>
          </Link>
        </h2>

        {/* Navbar icons (changes orientation based on screen size) */}
        <div className="site-menu">
          <ul>
            <li className="compressed parent-menu">
              <Link to="/what-is-cs">
                <span className="icon">
                  <Foundations />
                </span>
                <span className="preamble">CS</span> Foundations
              </Link>
              <ul>
                {/*<li>
                  <Link to="/what-is-cs">
                    <span className="preamble">What is</span> CS Education?
                  </Link>
                </li>*/}
                <li>
                  <Link to="/perspectives">
                    <span className="preamble">CS</span> Perspectives
                  </Link>
                </li>
                <li>
                  <Link to="/practices">
                    <span className="preamble">CS</span> Practices
                  </Link>
                </li>
                <li>
                  <Link to="/concepts">
                    <span className="preamble">CS</span> Concepts
                  </Link>
                </li>
                <li>
                  <Link to="/outcomes">
                    <span className="preamble">Student</span> Outcomes
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/curriculum">
                <span className="icon">
                  <Units />
                </span>
                <span className="preamble">Curriculum</span> Catalog
              </Link>
            </li>
            <li>
              <Link to="/resources">
                <span className="icon">
                  <Resources />
                </span>
                <span className="preamble">Educator</span> Resources
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="icon">
                  <Blueprint />
                </span>
                <span className="preamble">About</span> Blueprint
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
