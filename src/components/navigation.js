import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding-top: 1rem;

  li:first-child {
    margin-right: 1rem;
  }
`

const Navigation = () => (
  <NavMenu>
    <Link style={{ textDecoration: 'none', color: 'black' }}>
      <li>About</li>
    </Link>
    <Link style={{ textDecoration: 'none', color: 'black' }}>
      <li>Connect</li>
    </Link>
  </NavMenu>
)

export default Navigation
