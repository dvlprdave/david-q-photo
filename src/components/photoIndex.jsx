import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const IndexWrapper = styled.ul`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  margin: 0;
  align-items: bottom;

  li {
    margin-bottom: 2rem;
  }
`

const StyledLink = styled(Link)`
  color: grey;
  font-size: 4rem;
  text-decoration: none;

  &:hover {
    color: black;
  }
`

const PhotoIndex = () => (
  <IndexWrapper>
    <li>
      <StyledLink to="/checkered-flag/">Checkered Flag</StyledLink>
    </li>
    <li>
      <StyledLink>Birds Nest</StyledLink>
    </li>
    <li>
      <StyledLink>The Grand Turret</StyledLink>
    </li>
    <li>
      <StyledLink>Simulation Theory</StyledLink>
    </li>
  </IndexWrapper>
)

export default PhotoIndex
