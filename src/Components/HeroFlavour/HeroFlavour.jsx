import React from 'react'
import './HeroFlavour.css'
import { IceCreamCone } from 'lucide-react'

const HeroFlavour = () => {
  return (
    <div className='hero-flavours'>
        <div className="hero-flavours-content">
             <h1><IceCreamCone size={40}/> Flavours</h1>
            <p>Discover Our Handcrafted ice creams</p>
        </div>
    </div>
  )
}

export default HeroFlavour
