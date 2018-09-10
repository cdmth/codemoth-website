import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className="navbar is-info">
    <div className="navbar-burger burger" data-target="navbar-links">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div id="navbar-links" className="navbar-menu">
      <div id="navbar-items" className="navbar-start">
        <a className="navbar-item is-size-6" href="/">
          <span className="icon">
            <i className="fas fa-bolt"></i>
          </span>
          <span>
            Meistä
          </span>
        </a>
        <a className="navbar-item is-size-6" href="/">
          <span className="icon">
            <i className="fas fa-code"></i>
          </span>
          <span>
            Palvelut
          </span>
        </a>
        <a className="navbar-item is-size-6" href="/">
          <span className="icon">
            <i className="fas fa-comment"></i>
          </span>
          <span>
            Ota yhteyttä
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Header
