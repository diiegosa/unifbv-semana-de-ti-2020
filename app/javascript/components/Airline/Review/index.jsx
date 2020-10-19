import React from 'react'
import { Card, Title, Description } from './styles';
import Rating from '../../Rating'

const Review = (props) => {
  return (
    <Card>
      <Title>
        {props.title}
      </Title>
      <Description>
        {props.description}
      </Description>
      <div className="review-rating">
        <Rating score={props.score}/>
      </div>
    </Card>
  )
}

export default Review
