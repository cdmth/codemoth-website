import React from 'react'
import Typing from 'react-typing-animation';
import { Parallax } from 'react-scroll-parallax';


const SecondPage = () => (
  <Parallax
  className="custom-class"
  offsetYMax={10}
  offsetYMin={-10}
  slowerScrollRate
  tag="figure"
>
    <section className="hero is-fullheight">
      <div className="hero-body is-centered">
        <div className="container is-fluid">
          <div className="" style={{maxWidth: "800px", margin: "0 auto"}}>
              <p className="message-text" >
                > OLEMME OIKEASTI HAUSKOJA TYYPPEJÄ
              </p>
              <p>
                Ilman sosiaalisia taitoja ei tästä hommasta tulisi yhtään mitään. 
                Pystymme puhumaan tekniset asiat todella yksinkertaisesti.
                Hei, kokeillaan löytyykö yhteinen sävel kanssasi?
              </p>
          </div>
        </div>
      </div>
    </section>
    </Parallax>
)

export default SecondPage
