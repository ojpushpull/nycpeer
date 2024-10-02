import * as React from "react"
import Layout from '../components/layout'

// Definie component

const IndexPage = () => {
  return (
   <Layout pageTitle="Home Page">
    <p>This site is going to be a business I commit too</p>
   </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage