import React from 'react'
import { Link } from 'react-router-dom'
import { Card, AirlineLogo, AirlineName, LinkWrapper } from './styles';
import Rating from '../../Rating'

const Airline = (props) => {
  const {name, image_url, slug, avg_score} = props.attributes

  return (
    <Card>
      <AirlineLogo>
        <img src={image_url} alt={name} width="50" />
      </AirlineLogo>
      <AirlineName>
        {name}
      </AirlineName>
      <Rating score={avg_score} />
      <LinkWrapper>
        <Link to={"/" + slug}>View Airline</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Airline
