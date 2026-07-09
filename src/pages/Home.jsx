import React from 'react'
import Hero from '../Components/Hero/Hero'
import ShopCategory from '../Components/ShopCategory/ShopCategory'
import BestSeller from '../Components/BestSeller/BestSeller'
import CustomerReviews from '../Components/CustomerReviews/CustomerReviews'

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopCategory />
      <BestSeller />
      <CustomerReviews/>
    </div>
  )
}

export default Home
