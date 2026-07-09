import React from 'react'
import './MenuCoverPage.css'
import menu_cover from '../../assets/menucover_image.png'
import { useNavigate } from 'react-router-dom'

const MenuCoverPage = () => {

    const navigate = useNavigate();
  return (
    <div className='menu-cover-page'>
        <img src={menu_cover} alt="" />
        <h1>Try Eating Our</h1>
        <h2>Flavours</h2>
        <button onClick={()=>navigate('/menu/list')}>See Our Menu</button>
    </div>
  )
}

export default MenuCoverPage
