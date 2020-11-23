import React from "react"
import Layout from "./../components/layout"
import Card from "./../components/Card"
import "./laboratory.scss"
const Laboratory = () => {
  return (
    <Layout>
      <div className="container">
        <div className="laboratory">
          <h1>Laboratory</h1>
          <p>Just random code snippets, and design things.</p>
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
    </Layout>
  )
}

export default Laboratory
