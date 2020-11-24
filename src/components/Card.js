import React from "react"
import "./card.scss"
const Card = ({ imgURL, stack, githubLink, websiteLink, description }) => {
  return (
    <div className="card">
      <img src={imgURL} className="img" alt={description} />
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
