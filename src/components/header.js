import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className="navbar is-transparent is-spaced">
    <div className="container">
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            <span className="icon">
              <i className="fas fa-gem fa-2x"></i>
            </span>
            <span>
              Palvelut
            </span>
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:3000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                  <span className="icon">
                    <i className="fab fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
