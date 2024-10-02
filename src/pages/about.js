import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <main>
            <h1>About Me</h1>'
            <Link to="/">Back to Home</Link>
            <p>Hi there i made this lil website</p>
        </main>
    )
}

export const Head = () => <title>ABout Me</title>

export default AboutPage