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
                imgURL="https://res.cloudinary.com/ajanimyers/image/upload/v1606129331/afro-cuts_nm5oms.jpg"
                stack="HTML, CSS"
                githubLink="https://github.com/ajanimyers/afro-cuts"
                websiteLink="https://ajanimyers.github.io/afro-cuts/"
                description="Just a simple landing page utilizing HTML, and CSS."
              />
              <Card
                imgURL="https://res.cloudinary.com/ajanimyers/image/upload/v1606257482/recipe-generator_eibrea.jpg"
                stack="React, Sass"
                githubLink="https://github.com/ajanimyers/random-recipe-generator"
                websiteLink="https://brave-hodgkin-799f69.netlify.app/"
                description="A simple random recipe generator built using react, and sass."
              />
              <Card
                imgURL="https://res.cloudinary.com/ajanimyers/image/upload/v1606432480/photo-gallery_rwwxko.jpg"
                stack="React, Sass"
                githubLink="https://github.com/ajanimyers/photo-gallery"
                websiteLink="https://vibrant-yonath-c3dc2b.netlify.app/"
                description="A simple photo gallery built using react, and sass."
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
