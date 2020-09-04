import React from "react"
import foundationsIcon from '../images/svg/icon-foundations.svg'
import unitsIcon from '../images/svg/icon-units.svg'
import resourcesIcon from '../images/svg/icon-resources.svg'
import blueprintIcon from '../images/svg/icon-about-blueprint.svg'
import logo from '../images/Logo.svg'

const Navbar = () => (
  <nav id="menu">
    <h2>
      <a className="toggle" href="#menu">
        <span className="icon"><svg><use xlinkHref="#icon-menu" /></svg></span>
        <span className="label">Menu</span>
      </a>
    </h2>

    {/* local ".php" filepaths should be replaced with the correct cms-generated filepath. '/about.php' ->  '/about/' */}
    <div className="site-menu">
    <span id="brand"><img src={logo} /></span>
      <ul>
        <li>
          <a href="/what-is-cs">
            {/* <span className="icon"><svg><use xlinkHref="#icon-foundations" /></svg></span> */}
            <span className="icon"> <img src={foundationsIcon} /></span>
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
            {/* <span className="icon"><svg><use xlinkHref="#icon-units" /></svg></span> */}
            <span className="icon"> <img src={unitsIcon} /></span>
            <span className="preamble">curriculum</span> Catalog
          </a>
        </li>

        <li>
          <a href="/resources">
            {/* <span className="icon"><svg><use xlinkHref="#icon-resources" /></svg></span> */}
            <span className="icon"> <img src={resourcesIcon} /></span>
            <span className="preamble">Educator</span> Resources
          </a>
        </li>
        
        <li>
          <a href="/about">
            {/* <span className="icon"><svg><use xlinkHref="#icon-blueprint" /></svg></span> */}
            <span className="icon"> <img src={blueprintIcon} /></span>
            <span className="preamble">About</span> Blueprint
          </a>
        </li>

        {/* if user.is_authenticated }
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="http://blueprint.cs4all.nyc/accounts/login/">
            <span className="icon"><svg><use xlinkHref="#icon-user" /></svg></span>
            <span className="preamble">my</span> ACCOUNT
            <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li><a href="/users/{{user.id}}">View Profile</a></li>
            <li><a href="{% url 'edit_profile' %}">Edit Profile</a></li>
            <li><a href="{% url 'auth_logout' %}">Log Out</a></li>
          </ul>
        </li>
        {% else %}
          <li>
            <a href="{% url 'auth_login' %}">
              <span className="icon"><svg><use xlinkHref="#icon-lock" /></svg></span>
            login
          </a>
          </li>
        */ }
      </ul>
    </div>
  </nav>
  )

export default Navbar
