import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {Menu,XIcon} from "lucide-react"
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'

const Navbar = () => {

    const [menuOpen , setmenuOpen] = useState(false);
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",handleScroll)

        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])

  return (
    <div className={scrolled ? 'navbar navbar-scroll' : 'navbar'} id="navbar">
      <div className="navbar-left">
        <Link to="/"><img src="\icon.png" alt="" /></Link>
        <Link to="/"><h1>Cozy Cone</h1></Link>
      </div>
      <div className="navbar-right">
            <ul className={menuOpen? "nav-links active":"nav-links"}>
                <Link to='/'><li>Home</li></Link>
                <Link to="/menu"><li>Menu</li></Link>
                <Link to="/flavours"><li>Flavours</li></Link>
                <li>Contact us</li>
            </ul>
            <div className="menu-icon" onClick={()=>setmenuOpen(!menuOpen)}>
                {menuOpen ? <XIcon size={30}/>:<Menu size={30}/>}
            </div>
      </div>
    </div>
  )
}

export default Navbar
