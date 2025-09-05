import React from 'react'
import './Review.css'

const Review = ({ name, image, user_name, text, data }) => {
  return (
    <div className='review-item'>
      <img src={image} alt={name} />
      <p className='review-product-name'>{name}</p>
      <p className='review-user'>{user_name}</p>
      <p className='review-text'>{text}</p>
      <p className='review-date'>{data}</p>
    </div>
  )
}

export default Review
