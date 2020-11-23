import React from "react"
import Layout from "./../components/layout"
import "./portfolio.scss"
const Portfolio = () => {
  return (
    <Layout>
      <div className="container">
        <div className="portfolio">
          <h1>Portfolio</h1>
          <p>Some of my personal projects, and work i've done for clients.</p>
          <div className="card-list">
            <div className="card">
              <div className="img"></div>
              <div class="info">
                <p>Stack:</p>
                <p>Coming Soon.</p>
              </div>
            </div>
            <div className="card">
              <div className="img"></div>
              <div class="info">
                <p>Stack: </p>
                <p>Coming Soon.</p>
              </div>
            </div>
            <div className="card">
              <div className="img"></div>
              <div class="info">
                <p>Stack: </p>
                <p>Coming Soon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
