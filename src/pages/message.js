import React from 'react'
import Typing from 'react-typing-animation';
import { Parallax } from 'react-scroll-parallax';


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
          <div className="" style={{maxWidth: "800px", margin: "0 auto"}}>
            <Typing speed={50}>
              <p className="message-text" >
                > TEEMME OHJELMIA SEKÄ KOODIA SINUN TARPEISIIN
              </p>
              <Typing.Speed ms={10} />
              <p>
              Monesti tekijän löytäminen on hankalaa. On puitesopimuksia, kokonaisia tiimejä, turhia käsienheiluttelijoita. Tarjoamme työhön tekijän, emme mitään ylimääräistä. 
              </p>
            </Typing>
          </div>
        </div>
      </div>

    </section>
    </Parallax>
)

export default SecondPage
