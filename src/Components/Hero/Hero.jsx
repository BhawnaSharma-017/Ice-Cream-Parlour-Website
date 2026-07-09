import React from 'react'
import './Hero.css'
import { IceCreamCone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const navigate = useNavigate();
  return (
    <div className='hero'>
        <div className="hero-main" >
            <div className="hero-container">
                <div className="hero-left">
                <h1>Life is better with ice Cream!</h1>
                <p>Discover 100+ delicious flavors <IceCreamCone /></p>
                </div>
            </div>
            <div className="hero-btn">
                <button className="shop-now" onClick={()=>{navigate('/flavours')}}>Shop Now</button>
            <button className="explore" onClick={()=>{navigate('/menu')}}>Explore menu</button>
            </div>
        </div>
         
    </div>
  )
}

export default Hero
