import React from 'react'
import './BestSeller.css'
import { Star } from 'lucide-react'
import image_1 from '../../assets/image_1.jfif'
import image_2 from '../../assets/image_2.jfif'
import image_3 from '../../assets/image_3.jfif'
import image_4 from '../../assets/image_4.jfif'
import image_5 from '../../assets/image_5.jfif'
import image_6 from '../../assets/image_6.jfif'
import image_7 from '../../assets/image_7.jfif'
import image_8 from '../../assets/image_8.jfif'
import { useNavigate } from 'react-router-dom'

const BestSeller = () => {

    const navigate = useNavigate();
  return (
    <div className='best-seller'>
      <div className="best-seller-container">
        <h1><Star/> BEST SELLING FLAVOURS</h1>
        <p>Our Most Loved Ice Creams</p>
        <div className="best-seller-cards">
            <div className="best-seller-card">
                <img src={image_1} alt="" />
                <h1>The Original Classic</h1>
                <p>Three stacked scoops in a waffle cone (strawberry swirl, vanilla sprinkle, chocolate nut/cherry).</p>
                <div className="price-row">
                    <span>₹399</span>
                    <button onClick={()=>navigate("/menu/list")}>Order Now</button>
                </div>
            </div>
            <div className="best-seller-card">
                <img src={image_2} alt="" />
                <h1>The Tropical Escape</h1>
                <p>Scoop of lime sherbet, and topped with a passionfruit puree drizzle.</p>
                <div className="price-row">
                    <span>₹359</span>
                    <button onClick={()=>navigate("/menu/list")}>Order Now</button>
                </div></div>
            <div className="best-seller-card">
                <img src={image_3} alt="" />
                <h1>The Decadent Coffee House</h1>
                <p>Drizzled with a fine espresso glaze and sprinkled with crushed chocolate-covered coffee beans.</p>
                <div className="price-row">
                    <span>₹499</span>
                    <button onClick={()=>navigate("/menu/list")}>Order Now</button>
                </div>
            </div>
            <div className="best-seller-card">
                <img src={image_4} alt="" />
                <h1>The Berry Picnic</h1>
                <p>Garnished with a cluster of fresh, ripe mixed berries (blueberries, raspberries, blackberries).</p>
                <div className="price-row">
                    <span>₹459</span>
                    <button onClick={()=>navigate("/menu/list")}>Order Now</button>
                </div>
            </div>
            <div className="best-seller-card">
                <img src={image_5} alt="" />
                <h1>The Citrus Orchard</h1>
                <p>Garnished with a single twisted slice of fresh lime and a small, vibrant green mint leaf.</p>
                <div className="price-row">
                    <span>₹399</span>
                    <button onClick={()=>navigate("/menu/list")}>Order Now</button>
                </div>
            </div>
            <div className="best-seller-card">
                <img src={image_6} alt="" />
                <h1>The Garden Herb Gelato</h1>
                <p>Drizzled with a light balsamic glaze reduction and sprinkled with crushed, toasted pistachios.</p>
                <div className="price-row">
                    <span>₹299</span>
                    <button onClick={()=>navigate("/menu/list")}>Order Now</button>
                </div>
            </div>
            <div className="best-seller-card">
                <img src={image_7} alt="" />
                <h1>The Autumn Spice Sundae</h1>
                <p>A base of pumpkin spice and a top layer of maple gelato.</p>
                <div className="price-row">
                    <span>₹259</span>
                    <button onClick={()=>navigate("/menu/list")}>Order Now</button>
                </div>
            </div>
            <div className="best-seller-card">
                <img src={image_8} alt="" />
                <h1>The Japanese Matcha Garden</h1>
                <p>Topped with two small, pink and white mochi skewers and a light dusting of kinako (roasted soybean flour).</p>
                <div className="price-row">
                    <span>₹399</span>
                    <button onClick={()=>navigate("/menu/list")}>Order Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BestSeller
