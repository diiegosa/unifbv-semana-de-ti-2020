import React from 'react'
import './styles.css'

const Rating = (props) => {
  const score = (props.score / 5) * 100

  return (
    <span className="rating-wrapper">
      <span className="rating" style={{ width: score + "%" }}></span>
    </span>
  )
}

export default Rating
