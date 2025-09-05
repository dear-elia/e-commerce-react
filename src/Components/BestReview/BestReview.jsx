import React from 'react'
import data_review from '../Assets/review'
import Review from '../Review/Review'
import './BestReview.css'

const BestReview = () => {
  return (
    <div className='review'>
      <h1>BEST Review</h1>
      <div className='item-review'>
        {data_review.map((item) => (
          <Review
            key={item.id} 
            name={item.name} 
            image={item.image} 
            user_name={item.user_name} 
            text={item.text} 
            data={item.data} 
          />
        ))}
      </div>
    </div>
  )
}

export default BestReview
