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
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
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