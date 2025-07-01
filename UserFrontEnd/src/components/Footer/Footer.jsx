import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footer-logo' src={assets.logo_bottom} alt="" />
          <p>FoodPrep is a modern, responsive web-based food ordering platform designed to enhance the dining experience for users while streamlining operations for food vendors. It allows users to browse a curated list of dishes, add items to a cart, and place orders with ease — all through an intuitive interface.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><a href=""></a>Home</li>
            <li><a href=""></a>About us</li>
            <li><a href=""></a>Courses</li>
            <li><a href=""></a>Reviews</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91 8919206703</li>
            <li>p.gomathikrishna@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="footer-hr" />
      <p className='footer-copyright'>Copyright 2025 © FoodPrep. All rights reserved.</p>
    </div>
  )
}

export default Footer
