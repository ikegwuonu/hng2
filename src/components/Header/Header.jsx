import React, {useState} from 'react';
import './Header.css';
import img1 from '../../assets/img1.png';
import {FaBars, FaSearch, FaHeart, FaUser,FaBell,  FaShoppingCart} from 'react-icons/fa';
import useMediaQuery from '../../hooks/useMediaQuery'; // Adjusted path
import { Link } from 'react-router-dom';

/*import {BellIcon, UserIcon}from '@heroicons/react/outline';*/


const Header = () => {
  const isScreenSmall = useMediaQuery(768); // Set the breakpoint for small screens



  return (
    <div className="heaader-contaainer">
    <div className="header">
      {isScreenSmall?<><FaBars/></>:<></>}
            
      
      <img src={img1} alt="Logo" className="logo" />
      <ul className='menu'>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Blogs</li>
      </ul>
      <div>
        {isScreenSmall?<></>:<>
          <form action="">
          <input type="text" placeholder='Enter what you are looking for' />
          <FaSearch className='icon'/>
          
          
        </form>
        </>}
       <div className='flex'>
        <p className='relative'>
          <FaHeart className='icon'/>
          
           <span className='icon-superscript-one'>2</span>
        </p>
        <p className='relative'>
          <FaBell className='icon'/>
           <span className='icon-superscript-one'>2</span>
        </p><p className='relative'>
          <FaUser className='icon'/>
          
           <span className='icon-superscript-one'>2</span>
        </p>
        
        
        <p className='cart'>
        <Link to='/cart'>
          <FaShoppingCart/></Link>
        </p>
        </div>
      </div>
            
    </div>
    <hr />
    </div>
  );
};

export default Header;
