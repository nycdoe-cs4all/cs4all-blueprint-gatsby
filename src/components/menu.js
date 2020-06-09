
import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
//
// import Header from "./header"

const Menu = () => (
  <nav id="menu">

  <h2>
    <a class="toggle" href="#menu">
      <span class="icon"><svg><use xlink:href="#icon-menu" /></svg></span>
      <span class="label">Menu</span>
    </a>
  </h2>

  {/* local ".php" filepaths should be replaced with the correct cms-generated filepath. '/about.php' ->  '/about/' */}
  <div class="site-menu">
    <ul>

      <li>
        <a href="/what-is-cs">
          <span class="icon"><svg><use xlink:href="#icon-foundations" /></svg></span>
          <span class="preamble">CS</span> Foundations
          <span class="caret"></span>
        </a>

        <ul>
          <li><a href="/what-is-cs"><span class="preamble">What is</span> CS Education?</a></li>
          <li><a href="/perspectives"><span class="preamble">CS</span> Perspectives</a></li>
          <li><a href="/practices"><span class="preamble">CS</span> Practices</a></li>
          <li><a href="/concepts"><span class="preamble">CS</span> Concepts</a></li>
          <li><a href="/outcomes"><span class="preamble">Student</span> Outcomes</a></li>
        </ul>

      </li><li>
        <a href="/curriculum">
          <span class="icon"><svg><use xlink:href="#icon-units" /></svg></span>
          <span class="preamble">curriculum</span> Catalog
        </a>

      </li><li>
        <a href="/resources">
          <span class="icon"><svg><use xlink:href="#icon-resources" /></svg></span>
          <span class="preamble">Educator</span> Resources
        </a>

      </li><li>
        <a href="/about">
          <span class="icon"><svg><use xlink:href="#icon-blueprint" /></svg></span>
          <span class="preamble">About</span> Blueprint
        </a>

      {/* if user.is_authenticated }
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="http://blueprint.cs4all.nyc/accounts/login/">
          <span class="icon"><svg><use xlink:href="#icon-user" /></svg></span>
          <span class="preamble">my</span> ACCOUNT
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a href="/users/{{user.id}}">View Profile</a></li>
          <li><a href="{% url 'edit_profile' %}">Edit Profile</a></li>
          <li><a href="{% url 'auth_logout' %}">Log Out</a></li>
        </ul>
      </li>
      {% else %}
        <li>
          <a href="{% url 'auth_login' %}">
            <span class="icon"><svg><use xlink:href="#icon-lock" /></svg></span>
          login
        </a>
        </li>
      */ }

    </ul>
  </div>

  </nav>
  )
}

export default Menu
