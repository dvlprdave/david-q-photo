import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grip-gap: 1rem;

  justify-items: center;
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
        <LayoutGrid
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: 1200,
        //   padding: `0px 1.0875rem 1.45rem`,
        //   paddingTop: 0,
        // }}
        >
          {children}
          <footer>© {new Date().getFullYear()}, David Quick</footer>
        </LayoutGrid>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
