import React from "react"
import Layout from "./../components/layout"
import Card from "./../components/Card"
import "./portfolio.scss"
const Portfolio = () => {
  return (
    <Layout>
      <div className="container">
        <div className="portfolio">
          <h1>Portfolio</h1>
          <p>Some of my personal projects, and work i've done for clients.</p>
          <div className="card-list">
            <div className="card-list">
              <Card
                imgUrl="https://res.cloudinary.com/ajanimyers/image/upload/v1606129331/afro-cuts_nm5oms.jpg"
                stack="HTML, CSS"
                githubLink="https://github.com/ajanimyers/afro-cuts"
                websiteLink="https://ajanimyers.github.io/afro-cuts/"
                description="Just a simple landing page utilizing HTML, and CSS."
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
