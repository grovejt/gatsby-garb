import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import gatsbyLogo from "../images/gatsby-icon.png"

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" }
}

const NavLink = props => <Link getProps={isActive} {...props} />

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      {/* Title/Logo */}
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <img
          src={gatsbyLogo}
          alt="Gatsby Garb Logo"
          style={{
            border: "3px solid orange",
            borderRadius: "50%",
            margin: "0 5px",
            width: "50px"
          }}
        />
        <h1 style={{ margin: 0 }}>
          <NavLink to="/">{siteTitle}</NavLink>
        </h1>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/products">Store</NavLink>
        {/* Shopping Cart Summary */}
        <div
          className="snipcart-summary snipcart-checkout"
          style={{ color: "white", cursor: "pointer" }}
        >
          <div>
            <strong>My Cart</strong>
          </div>
          <div>
            <span
              style={{ fontWeight: "bold" }}
              className="snipcart-total-items"
            ></span>{" "}
            Items in Cart
          </div>
          <div>
            Total price{" "}
            <span
              style={{ fontWeight: "bold" }}
              className="snipcart-total-price"
            ></span>
          </div>
        </div>
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
