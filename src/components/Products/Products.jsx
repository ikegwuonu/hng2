import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'
import image11 from '../../assets/image11.png'
import image12 from '../../assets/image12.png'
import image13 from '../../assets/image13.png'
import image14 from '../../assets/image14.png'


const Products = () => {
  return (
    <div className='Products-container'>
        <div className='breadcrumbs'>
            <span>Products</span>
            <span>/</span>
            <span>Male Collection</span>
            <span>/</span>
            <span>Shoes</span>
        </div><br />
        <div className='products'>
            <div className="product">
                <p><FaHeart/></p>
                <img src={image12} alt="" />
                <div className='description'>
                    <div className='mini-desc'>
                        <p>Custom Air force one</p>
                        <p>$490.0</p>
                    </div>
                    
                    <Link to='./cart'><p className='blue'>Add to cart</p></Link>
                </div>
            </div>
            <div className="product">
                <p><FaHeart/></p>
                <img src={image12} alt="" />
                <div className='description'>
                    <div className='mini-desc'>
                        <p>Custom Air force one</p>
                        <p>$490.0</p>
                    </div>
                    <Link to='./cart'><p className='blue'>Add to cart</p></Link>
                </div>
            </div>
            <div className="product">
                <p><FaHeart/></p>
                <img src={image13} alt="" />
                <div className='description'>
                    <div className='mini-desc'>
                        <p>Custom Air force one</p>
                        <p>$490.0</p>
                    </div>
                    <Link to='./cart'><p className='blue'>Add to cart</p></Link>
                </div>
            </div>
            <div className="product">
                <p><FaHeart/></p>
                <img src={image14} alt="" />
                <div className='description'>
                    <div className='mini-desc'>
                        <p>Custom Air force one</p>
                        <p>$490.0</p>
                    </div>
                    <Link to='./cart'><p className='blue'>Add to cart</p></Link>
                </div>
            </div>
            <div className="product">
                <p><FaHeart/></p>
                <img src={image14} alt="" />
                <div className='description'>
                    <div className='mini-desc'>
                        <p>Custom Air force one</p>
                        <p>$490.0</p>
                    </div>
                    <Link to='./cart'><p className='blue'>Add to cart</p></Link>
                </div>
            </div>
            <div className="product">
                <p><FaHeart/></p>
                <img src={image12} alt="" />
                <div className='description'>
                    <div className='mini-desc'>
                        <p>Custom Air force one</p>
                        <p>$490.0</p>
                    </div>
                    <Link to='./cart'><p className='blue'>Add to cart</p></Link>
                </div>
            </div>
            <div className="product">
                <p><FaHeart/></p>
                <img src={image13} alt="" />
                <div className='description'>
                    <div className='mini-desc'>
                        <p>Custom Air force one</p>
                        <p>$490.0</p>
                    </div>
                    <p>Add to cart</p>
                </div>
            </div>
            <div className="product">
                <p><FaHeart/></p>
                <img src={image13} alt="" />
                <div className='description'>
                    <div className='mini-desc'>
                        <p>Custom Air force one</p>
                        <p>$490.0</p>
                    </div>
                    <Link to='./cart'><p className='blue'>Add to cart</p></Link>
                </div>
            </div>
            <div className="product">
                <p><FaHeart/></p>
                <img src={image13} alt="" />
                <div className='description'>
                    <div className='mini-desc'>
                        <p>Custom Air force one</p>
                        <p>$490.0</p>
                    </div>
                    <Link to='./cart'><p className='blue'>Add to cart</p></Link>
                </div>
            </div>
            <div className="product">
                <p><FaHeart/></p>
                <img src={image13} alt="" />
                <div className='description'>
                    <div className='mini-desc'>
                        <p>Custom Air force one</p>
                        <p>$490.0</p>
                    </div>
                    <Link to='./cart'><p className='blue'>Add to cart</p></Link>
                </div>
            </div>
            <div className="product">
                <p><FaHeart/></p>
                <img src={image13} alt="" />
                <div className='description'>
                    <div className='mini-desc'>
                        <p>Custom Air force one</p>
                        <p>$490.0</p>
                    </div>
                    <Link to='./cart'><p className='blue'>Add to cart</p></Link>
                </div>
            </div>
            <div className="product">
                <p><FaHeart/></p>
                <img src={image13} alt="" />
                <div className='description'>
                    <div className='mini-desc'>
                        <p>Custom Air force one</p>
                        <p>$490.0</p>
                    </div>
                    <Link to='./cart'><p className='blue'>Add to cart</p></Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Products