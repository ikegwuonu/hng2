import React, { useState } from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import useMediaQuery from '../../hooks/useMediaQuery'; // Adjusted path

const Footer = () => {
  const isScreenSmall = useMediaQuery(768); // Set the breakpoint for small screens

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleAccount = () => setIsAccountOpen(!isAccountOpen);
  const toggleSupport = () => setIsSupportOpen(!isSupportOpen);
  return (
    <div className='Footer-container'>
    
        <div className="footer">
          <div className="social-media">
            <div className='social1'>KICKZZ</div>
            <div className='s2'>
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={LinkedIn} alt="" /></div>

          </div>
          <div className='toggle'>
          <div >
            <div onClick={isScreenSmall ? toggleServices : undefined} className="accordion-header">
              <span>Services</span>
              <span className='plus'>+</span>
            </div>
              {(isServicesOpen || !isScreenSmall) && (
              <div className="accordion-content">
                <p>Clothing</p>
                <p>Wholesale</p>
                <p>Branding</p>
                <p>Dropshipping</p>
              </div>
              )}
            
            </div>
            <div >
            <div onClick={isScreenSmall ? toggleSupport : undefined} className="accordion-header">
              <span>Support</span>
              <span className='plus'>+</span>
            </div>
              {(isSupportOpen || !isScreenSmall) && (
              <div className="accordion-content">
                 <p>Contact</p>
                <p>Give Feedback</p>
                <p>FAQ</p>
                <p>Privacy Policy</p>
              </div>
              )}
            
            </div>
            <div >
            <div onClick={isScreenSmall ? toggleAccount : undefined} className="accordion-header">
              <span>Account</span>
              <span className='plus'>+</span>
            </div>
              {(isAccountOpen || !isScreenSmall) && (
              <div className="accordion-content">
                <p>My Account</p>
                <p>Login/ Register</p>
                <p>Cart</p>
                <p>Favourites</p>
                <p>Shop</p>
              </div>
              )}
            
            </div>
            
          
        </div>
        </div>
        <div>
          Copyright Juliet 2023. All rights reserved
        </div>
       
    </div>
  )
}
export default Footer