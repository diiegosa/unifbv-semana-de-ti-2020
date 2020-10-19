import React from 'react'
import { StyledHeader } from './styles';
import Rating from '../../Rating'

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes

  return(
    <StyledHeader>
      <img src={image_url} alt={name} width="50"/>
      <h1>{name}</h1>
      <Rating score={avg_score} />
    </StyledHeader>
  )
}

export default Header
