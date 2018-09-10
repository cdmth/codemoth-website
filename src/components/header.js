import React from 'react'

import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className="navbar is-fixed-top">
    <div className="navbar-burger burger" data-target="navbar-links">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div id="navbar-links" className="navbar-menu">
      <div id="navbar-items" className="navbar-start">
        <a className="navbar-item is-size-5" href="/">
          <span>
            Meistä
          </span>
        </a>
        <a className="navbar-item is-size-5" href="/">
          <span>
            Palvelut
          </span>
        </a>
        <a className="navbar-item is-size-5" href="/">
          <span>
            Ota yhteyttä
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Header
