import React from 'react'
import lines from '../images/lines.svg'
import { Follow } from 'react-twitter-widgets'

const SecondPage = () => (
  <section className="hero is-fullheight contact-hero" style={{backgroundImage: `url(${lines})`, backgroundColor: "#3c5566", backgroundSize: "4%"}}>
    <div className="hero-body is-centered">
      <div className="container is-fluid">

        <div className="columns">
          <div className="column">
            <div className="card-content has-text-centered">
              <p className="title is-size-1 card-title">
                JUHA
              </p>
              <p className="subtitle dadada-ukkeli">
                juha@codemoth.fi
              </p>
              <span className="card-icon has-text-info">
                <i className="far fa-user fa-4x ukkeli"></i>
              </span>
            </div>
          </div>
          <div className="column">
            <div className="card-content has-text-centered">
              <p className="title is-size-1 card-title">
                ANTTI
              </p>
              <p className="subtitle dadada-ukkeli">
                antti@codemoth.fi
              </p>
              <span className="card-icon has-text-info">
                <i className="far fa-user fa-4x ukkeli"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
)

export default SecondPage
