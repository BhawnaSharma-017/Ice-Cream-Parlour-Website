import React from 'react'
import './ShopCategory.css'
import { Cookie, Dessert, IceCreamBowl, IceCreamCone, Popsicle } from 'lucide-react'

const ShopCategory = () => {
  return (
    <div className='shop-category' id='flavours'>
      <div className="shop-category-container">
        <h1><IceCreamBowl /> Shop By Category</h1>
        <div className="shop-category-categories">
            <p><Dessert/> Chocolate</p>
            <p><Popsicle/> Strawberry</p>
            <p>🥭 Mango</p>
            <p><Cookie/> Cookies</p>
            <p><IceCreamCone/> Specials</p>
        </div>
      </div>
    </div>
  )
}

export default ShopCategory
