import React from 'react'
import './MenuPage.css'
import { iceCreams } from '../../assets/iceCream'
import { Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const MenuPage = () => {

    const navigate = useNavigate();
  return (
    <div className='menu-page'>
      <h1>COZY CONE</h1>
      <h4>Get Delicious Flavours</h4>
      <div className="menu-page-cards">
            {iceCreams.map(ice=>(
                <div className="menu-page-card" key={ice.id}>
                    <img src={ice.image} alt="" /> 
                    <div className="menu-page-card-content">
                        <h2>{ice.name}</h2>
                        <h3>{ice.category}</h3>
                        <p>{ice.desc}</p>
                        <div className="menu-card-price">
                            <p>Rs. {ice.price}</p>
                            <p>{ice.rating}<Star /></p>
                        </div>
                    </div>
                </div>
            ))}
      </div>
      <button onClick={()=>navigate(-1)}>Back to Cover Page</button>
    </div>
  )
}

export default MenuPage
