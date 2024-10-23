import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { menuItemsData } from './tmenu'
import {  container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle, } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                title
            }
        }
    }
    ` )
    return (
        <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
                Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/training" className={navLinkText}>
                Training
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/jobs" className={navLinkText}>
                Jobs
            </Link>
          </li>
          <li class="dropdown" className={navLinkItem}>
            <Button class="dropbtn">Resources
            <i class="fa fa-caret-down"></i>
           
            </Button>
            <div class="dropdown-content">
            <Link to="/resources" className={navLinkText}>
                Resources
            </Link>
            <Link to="/resources" className={navLinkText}>
                Resources
            </Link>
            </div>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout