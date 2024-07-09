import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero'
import Product from '../components/Products/Products'

const ProductPage = () => {
  return (
    <div>
        <Hero/>
        <Product/>
    </div>
  )
}

export default ProductPage