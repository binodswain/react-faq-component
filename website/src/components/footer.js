import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => {
  return (
    <footer className="footer-sec">
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.0875rem`,
        }}
      >
        <h4 style={{ margin: 0 }}>
          MIT ©{" "}
          <a href="https://github.com/binodswain" target="_blank">
            Binod Swain
          </a>
        </h4>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
