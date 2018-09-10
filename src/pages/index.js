import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <section className="hero is-fullheight">
    <div className="hero-body is-centered">
      <div className="container is-fluid">
        <div className="tile is-ancestor">
          <div className="tile service-tile is-vertical is-8">
            <div className="tile is-parent">
              <article className="tile is-child notification is-danger">
                <p className="title">Palvelut</p>
                <p className="subtitle">Ei välikäsiä.</p>
                <div className="content">
                  Monesti tekijän löytäminen on hankalaa. On puitesopimuksia, kokonaisia tiimejä, turhia käsienheiluttelijoita. Tarjoamme työhön tekijän, emme mitään ylimääräistä. 
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content has-text-centered">
                <p className="title is-size-4">
                  UX
                </p>
                <p className="subtitle has-text-grey">
                  Käytettävyyssuunnittelu
                </p>
                <span className="card-icon has-text-danger">
                  <i className="far fa-braille fa-4x"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content has-text-centered">
                <p className="title is-size-4">
                  UI
                </p>
                <p className="subtitle has-text-grey	">
                  Käyttöliittymäsuunnittelu
                </p>
                <span className="card-icon has-text-danger">
                  <i className="far fa-id-card fa-4x"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content has-text-centered">
                <p className="title is-size-4">
                  Frontend
                </p>
                <p className="subtitle has-text-grey	">
                  Web-kehitys
                </p>
                <span className="card-icon has-text-danger">
                  <i className="far fa-browser fa-4x"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content has-text-centered">
                <p className="title is-size-4">
                  Backend
                </p>
                <p className="subtitle has-text-grey	">
                  Sovelluskehitys
                </p>
                <span className="card-icon has-text-danger">
                  <i className="far fa-rocket fa-4x"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
)

export default IndexPage
