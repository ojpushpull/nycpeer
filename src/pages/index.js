import * as React from "react"
import { Link } from 'gatsby';

// Definie component

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to wayne world</h1>
      <Link to="/about">About </Link>
      <p>Im making this by following lord gyats turotial</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage