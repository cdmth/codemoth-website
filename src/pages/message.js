import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const SecondPage = () => (
  <Parallax
    className="custom-class"
    offsetYMax={40}
    offsetYMin={-40}
    slowerScrollRate
    tag="figure"
  >
    <section className="hero is-fullheight">
      <div className="hero-body is-centered">
        <div className="container is-fluid">
          <div className="" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="message-text">
              > TEEMME OHJELMIA SEKÄ KOODIA SINUN TARPEISIIN
            </p>
            <p>
              Monesti tekijän löytäminen on hankalaa. On puitesopimuksia,
              kokonaisia tiimejä, turhia käsienheiluttelijoita. Tarjoamme työhön
              tekijän, emme mitään ylimääräistä.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Parallax>
)

export default SecondPage
