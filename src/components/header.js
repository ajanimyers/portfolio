import React, { useState } from "react"
import { Link } from "gatsby"

import "./header.scss"
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleClick = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">JM</Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={openMenu ? "navbar-nav show-nav" : "navbar-nav"}>
            <Link to="/">
              <li>
                {"{ "}Home{" }"}
              </li>
            </Link>
            <Link to="/portfolio">
              <li>
                {" "}
                {"{ "}Portfolio{" }"}
              </li>
            </Link>
            <Link to="/laboratory">
              <li>
                {"{ "}Laboratory{" }"}
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
