import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/seo'
// Definie component

const IndexPage = () => {
  return (
   <Layout pageTitle="Home Page">
    <p>This site is going to be a business I commit too</p>
    <StaticImage
    alt="Cute lil boy"
    src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
    />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage