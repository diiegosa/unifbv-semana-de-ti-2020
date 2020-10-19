import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import { Column } from './styles'
import Review from './Review'
import ReviewForm from './ReviewForm'

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [review, setReview] = useState({})

  useEffect( () => {
    const slug = props.match.params.slug
    const url = `/api/v1/airlines/${slug}`

    axios.get(url)
    .then( (resp) => {
      setAirline(resp.data)
      setLoaded(true)
    })
    .catch( resp => {
      console.log(resp) 
    })
  }, [])

  function handleChange (e) {
    e.preventDefault()
    setReview(Object.assign(review, {[e.target.name]: e.target.value}))
  }

  function handleSubmit (e) {
    e.preventDefault()
  
    const airline_id = airline.data.id
    axios.post('/api/v1/reviews', { ...review, airline_id })
    .then( (resp) => {
        const included = [ ...airline.included, resp.data.data ]
        setAirline({ ...airline, included })
    })
    .catch( resp => console.log(resp))
  }
  
  function setRating(score, e) {
    e.preventDefault()

    setReview({...review, score})
  }

  let reviews
  if (airline.included && airline.included.length > 0) {
    reviews = airline.included.map( (review, index) => {
      return (
        <Review 
          key={index} 
          title={review.attributes.title} 
          description={review.attributes.description} 
          score={review.attributes.score} 
        />
      )
    })
  }

  return (
    <div>
      <Column>
        { loaded && 
          <Header attributes={airline.data.attributes} />
        }

        <div className="reviews">
          {reviews}
        </div>
      </Column>
      <Column>
        <ReviewForm
          name={name}
          review={review}
          handleChange={handleChange }
          handleSubmit={handleSubmit}
          setRating={setRating}
         />                   
      </Column>
    </div>
  )
}

export default Airline
