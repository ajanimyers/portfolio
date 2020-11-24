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
          <div className="card-list"></div>
        </div>
      </div>
    </Layout>
  )
}

export default Laboratory
