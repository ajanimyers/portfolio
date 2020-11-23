import React from "react"
import Header from "./../components/header"

const Layout = ({ children }) => {
  return (
    <div className="site-content">
      <Header />
      <main>{children}</main>
      <footer className="footer ">
        <div className="container">
          <small>My Portfolio made with ❤️</small>
        </div>
      </footer>
    </div>
  )
}

export default Layout
