import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import styled from 'styled-components'

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

export default () => (
  <Layout>
    <p style={{ maxWidth: '900px', fontSize: '2rem', lineHeight: '1.2' }}>
      Laia Abril uses photography to address topics that don’t lend themselves
      easily to representation. Although it is rooted in journalism and
      documentary practice, her work is transformative rather than descriptive.
      Bringing together fact, fiction and emotion, Abril invites audiences to
      engage with complex and sometimes difficult narratives
    </p>
    <PageLayout>
      <Image />
      <h1>About me</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>
    </PageLayout>
  </Layout>
)
