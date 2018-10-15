import React from 'react'
import Link from 'gatsby-link'
import bg from '../images/bg2.svg'

const Landing = () => (
  <section className="hero is-fullheight" style={{backgroundImage: `url(${bg})`}}>
    <div className="hero-body is-centered">
      <div className="has-text-centered" style={{margin: "0 auto"}}>
        <div className="big-title-box" style={{backgroundColor: '#FFF'}}>
          <p className="big-title">CODEMOTH</p>
        </div>
      </div>
    </div>

  </section>
)

export default Landing
