import React from 'react'
import './CustomerReviews.css'
import reviews from '../../assets/review'
import { Star } from 'lucide-react'

const CustomerReviews = () => {
  return (
    <div className='customer-reviews' id="reviews">
       <h1>Our Customers Reviews</h1>
      <div className="customer-reviews-main">
        {reviews.map((item)=>(
          <div key={item.id} className='customer-review-card'>
            <img src={item.image} alt={item.name} />
            <h1>{item.name}</h1>
            <p>{item.location}</p>
            <p>{item.rating} <Star className='star'/></p>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerReviews
