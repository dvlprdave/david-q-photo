import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navigation from './navigation'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: `1.25rem`,
    }}
  >
    <div
      style={{
        margin: `3rem`,
        maxWidth: 1200,
        padding: `1.45rem 0`,
      }}
    >
      <h3>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontWeight: `400`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <Navigation />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
