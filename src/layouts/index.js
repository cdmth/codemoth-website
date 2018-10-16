import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { ParallaxProvider } from 'react-scroll-parallax';

import '@fortawesome/fontawesome-pro/js/all.js'

import Landing from '../components/landing'
import Header from '../components/header'
import Footer from '../components/footer'
import Contact from '../pages/contact'
import Message from '../pages/message'
import Goodguys from '../pages/goodguys'
import './index.scss'

const Layout = ({ children, data }) => (
  <ParallaxProvider>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Teemme ohjelmia ja koodia sinun tarpeisiin.' },
          { name: 'image', content: 'https://s3.eu-central-1.amazonaws.com/codemoth.fi/shared/codemoth.png' },
          { name: 'keywords', content: 'frontend, backend, ui, ux' },
          { name: 'og:description', content: 'Teemme ohjelmia ja koodia sinun tarpeisiin.' },
          { name: 'og:image', content: 'https://s3.eu-central-1.amazonaws.com/codemoth.fi/shared/codemoth.png' },
          { name: 'og:title', content: 'Codemoth Coding Agency' },
          { name: 'og:type', content: 'website' },
          { name: 'og:url', content: 'http://codemoth.fi' },
          { name: 'twitter:description', content: 'Teemme ohjelmia ja koodia sinun tarpeisiin.' },
          { name: 'twitter:image', content: 'https://s3.eu-central-1.amazonaws.com/codemoth.fi/shared/codemoth.png' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:url', content: 'https://codemoth.fi' },
        ]}
      />
      <Landing />
      <Message />
      <div>
        {children()}
      </div>
      <Goodguys />
      <Contact />
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
  </ParallaxProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`