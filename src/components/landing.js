import React from 'react'
import Link from 'gatsby-link'
import bg from '../images/bg2.svg'
import { Parallax } from 'react-scroll-parallax';

const Landing = () => (
    <section className="hero is-fullheight" style={{backgroundImage: `url(${bg})`, backgroundSize: "800%"}}>
      <div className="hero-body is-centered">
        <div className="has-text-centered" style={{margin: "0 auto"}}>
        <Parallax
  className="custom-class"
  offsetYMax={60}
  offsetYMin={-60}
  slowerScrollRate
  tag="figure"
>
          <div className="big-title-box" style={{backgroundColor: '#FFF'}}>
            <p className="title big-title">CODEMOTH</p>
          </div>
          </Parallax>
        </div>
      </div>

    </section>

)

export default Landing
