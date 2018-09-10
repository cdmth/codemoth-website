import React from 'react'
import Link from 'gatsby-link'
import bg from '../images/background-4.jpg'

console.log(bg)

const Landing = () => (
  <section className="hero is-fullheight is-dark">
    <div className="hero-body is-centered">
      <div className="container is-fluid has-text-centered">
      <p className="title is-size-1">Codemoth</p>
      <p className="subtitle"><strong className="has-text-danger">coding company</strong></p>
      </div>
    </div>

  <div className="hero-foot">
      <div className="container has-text-centered">
        <i className="far fa-arrow-square-down fa-3x" style={{paddingBottom: '10px'}}></i>
      </div>
  </div>
  </section>
)

export default Landing
