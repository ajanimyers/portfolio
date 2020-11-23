import React from "react"
import { Link } from "gatsby"
import "./header.scss"
const Header = () => (
  <header>
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">JM</Link>
        </div>
        <ul className="navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/laboratory">Laboratory</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
