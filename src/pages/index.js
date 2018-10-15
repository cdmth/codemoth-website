import React from 'react'
import Link from 'gatsby-link'
import screens from '../images/screens.svg'
import { Parallax } from 'react-scroll-parallax';
import LeftDisplay from '../images/leftdisplay.svg'
import RightDisplay from '../images/rightdisplay.svg'

const IndexPage = () => (
  <section className="hero is-fullheight" style={{backgroundRepeat: "no-repeat", backgroundColor: "#81D4FA"}}>
    <Parallax
      className="custom-class"
      offsetXMax={-10}
      offsetXMin={5}
      slowerScrollRate
      tag="figure"
    >
      <img id="LeftDisplay" src={LeftDisplay} />
    </Parallax>

    <Parallax
      className="custom-class"
      offsetXMax={10}
      offsetXMin={-5}
      slowerScrollRate
      tag="figure"
    >
    <img id="RightDisplay" src={RightDisplay} />
    </Parallax>

    <div className="hero-body is-centered">
      <div className="container box" style={{maxWidth: "700px", backgroundColor: "#FFF"}}>
          <div className="column">
              <div className="card-content has-text-centered">
                <p className="title is-size-4">
                  UX - UI
                </p>
                <p className="subtitle has-text-grey">
                  Käytettävyys- ja käyttöliittymäsuunnittelu
                </p>
                <span className="card-icon">
                  <i className="far fa-id-card  fa-4x"></i>
                </span>
            </div>
          </div>
          <div className="column">
              <div className="card-content has-text-centered">
                <p className="title is-size-4">
                  Frontend - Backend
                </p>
                <p className="subtitle has-text-grey	">
                  Web- ja sovelluskehitys tarpeesi mukaan
                </p>
                <span className="card-icon">
                  <i className="far fa-browser fa-4x"></i>
                </span>
            </div>
          </div>

          <div className="column">
              <div className="card-content has-text-centered">
                <p className="title is-size-4">
                Digitaalisien palveluiden kehitys
                </p>
                <p className="subtitle has-text-grey	">
                  Toteutamme yhdessä ideasi
                </p>
                <span className="card-icon">
                  <i className="far fa-rocket fa-4x"></i>
                </span>
            </div>
          </div>

          <div className="column">
              <div className="card-content has-text-centered">
                <p className="title is-size-4">
                  Palveluliiketoiminnan kehittäminen ja palvelumuotoilu
                </p>
                <p className="subtitle has-text-grey	">
                  Konseptoinnista toteutukseen
                </p>
                <span className="card-icon">
                  <i className="far fa-compass fa-4x"></i>
                </span>
            </div>
          </div>

          <div className="column">
              <div className="card-content has-text-centered">
                <p className="title is-size-4">
                  Pilvipalveluiden suunnittelu ja käyttö
                </p>
                <p className="subtitle has-text-grey	">
                  Siirry helposti pilveen. Anna meidän nykyaikaistaa devops-putkesi
                </p>
                <span className="card-icon">
                  <i className="far fa-cloud fa-4x"></i>
                </span>
            </div>
          </div>

          <div className="column">
              <div className="card-content has-text-centered">
                <p className="title is-size-4">
                  Testauspalvelut
                </p>
                <p className="subtitle has-text-grey	">
                  Onko yrityksesi yksikkö-, integrointi-, end-to-end- tai robotiikkatestaukset on toteutettu?
                </p>
                <span className="card-icon">
                  <i className="far fa-check-circle fa-4x"></i>
                </span>
            </div>
          </div>
      </div>
    </div>
  </section>
)

export default IndexPage
