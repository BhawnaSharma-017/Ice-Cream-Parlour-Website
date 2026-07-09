import React from 'react'
import './Footer.css'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-section footer-icon">
              <img src="\icon.png" alt="" />
              <h3>Cozy Cone</h3>
        </div>
        <div className="footer-section">
            <ul>
              <h3>Quick Links</h3>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/menu'>Menu</Link></li>
              <li><Link to='/flavours'>Flavours</Link></li>
              <li><Link to='/'>Contact us</Link></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Contact</h3>
            <p><MapPin className='address-icon'/> Model Town,Karnal,132114</p>
            <p><Phone className='address-icon'/> +1 1223 3443</p>
            <p><Mail className='address-icon'/> cozycone@icecream.com</p>
        </div>
        <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/"><FaFacebookF size={24}/></a>
              <a href="https://www.instagram.com/"><FaInstagram size={24}/></a>
              <a href="https://x.com/"><FaXTwitter size={24}/></a>
              <a href="https://www.youtube.com/"><FaYoutube size={24}/></a>
              <a href="https://www.linkedin.com/"><FaLinkedinIn size={24}/></a>
            </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        &copy; 2026, Cozy Cone. All Right Reserved.
      </p>
    </footer>
  )
}

export default Footer
