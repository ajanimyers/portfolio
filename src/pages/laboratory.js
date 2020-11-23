import React from "react"
import Layout from "./../components/layout"
import "./laboratory.scss"
const Laboratory = () => {
  return (
    <Layout>
      <div className="container">
        <div className="laboratory">
          <h1>Laboratory</h1>
          <p>Just random code snippets, and design things.</p>
          <div className="card-list">
            <div className="card">
              <img
                src="https://res.cloudinary.com/ajanimyers/image/upload/v1606129331/afro-cuts_nm5oms.jpg"
                className="img"
                alt=""
              />
              <div className="info">
                <div className="details">
                  <p>
                    <span>Stack</span>: HTML, CSS
                  </p>
                  <a href="https://github.com/ajanimyers/afro-cuts">Github</a>
                </div>
                <p>Just a simple landing page utilizing HTML, and CSS.</p>
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

export default Laboratory
