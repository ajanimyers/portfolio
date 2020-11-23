import React from "react"
import "./index.scss"
import Layout from "./../components/layout"
export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="hero">
          <h2>
            Jordan<span>.me()</span>
          </h2>
          <h1>
            Frontend <span>/</span> Backend <span>/</span> WordPress Developer.
          </h1>
          <p>
            I'm a creative, and innovative developer based in Edmonton, Alberta.
          </p>
        </div>
        <div className="social">
          <h5>Follow Me.</h5>
          <ul>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">CodePen</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
