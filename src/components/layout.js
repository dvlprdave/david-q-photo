import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grip-gap: 1rem;

  max-width: 100vw;
  height: 100%;
  margin: 0 3rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutGrid>
          {children}
          {/* <footer>© {new Date().getFullYear()}, David Quick</footer> */}
        </LayoutGrid>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
