import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import PhotoIndex from '../components/photoIndex'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PhotoIndex />
    {/* <div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div> */}
  </Layout>
)

export default IndexPage
