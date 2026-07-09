import React from 'react'
import './OfferBanner.css'
import { Gift} from 'lucide-react'

const OfferBanner = () => {
  return (
    <div className='offer-banner'>
      <h1>Special Summer Offers <Gift size={34}/></h1>
      <p>"Buy 2 Scoops & Get 1 Free"</p>
    </div>
  )
}

export default OfferBanner
