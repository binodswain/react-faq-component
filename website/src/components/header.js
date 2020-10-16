import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  console.log(data)
  const {
    title, description
  } = data.site.siteMetadata;

  return (
    <header className="banner-sec">
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `6.45rem 1.0875rem`,
          marginBottom: `1em`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {title}
          </Link>
        </h1>
        <p className="banner-text">{description}</p>
        <div className="button-sec">

        </div>
      </div>
    </header>
  )
 }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
