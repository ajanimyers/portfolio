import React from "react"
import "./card.scss"
const Card = ({ imgUrl, stack, githubLink, websiteLink, description }) => {
  return (
    <div className="card">
      <img src={imgUrl} className="img" alt="" />
      <div className="info">
        <div className="details">
          <p>
            <span>Stack</span>: {stack}
          </p>
          <p>
            <a href={githubLink}>Github</a>
            <a href={websiteLink}>Website</a>
          </p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
