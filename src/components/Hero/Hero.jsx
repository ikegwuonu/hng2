import React from 'react'
import './Hero.css'
import img33 from '../../assets/img33.png'
import img44 from '../../assets/img44.png'

const Hero = () => {
  return (
    <div className='Hero'>
      <h1>EXCLUSIVE PERKS</h1>
      <div className='hero-image'>
        <img src={img44} alt="" />
        <img src={img33} alt="" />
      </div>
    </div>
  )
}

export default Hero