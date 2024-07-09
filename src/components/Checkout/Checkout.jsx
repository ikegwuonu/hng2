import React from 'react'
import './Checkout.css'


const Checkout = () => {
  return (
    <div className='Checkout-container'>
      <span className='grey breadcrumb'>Home / Products / Cart /  <span className='bluetext breadcrumb'> Checkout
        </span>
      </span>
     
      <div className="checkout">
        <div className="billing">
          <h2>Billing Address </h2>
          
          <p>First  Name</p>
          <input type="text"placeholder='Enter your first name' />
          <p>Last  Name</p>
          <input type="text"placeholder='Enter your last name' />
          <p>Phone</p>
          <input type="text"placeholder='Enter your phone no' />
          <p>Email</p>
          <input type="email"placeholder='Enter your email' />
          <p>Town/ city</p>
          <input type="text"placeholder='Enter your address' />
        </div>
        <div className="payment">
          <h3>Order Summary</h3>
          <hr />
          <div className='flex'>
            <div>Item (4)</div>
            <div className='bold'>$173</div>
          </div>
          <div className='flex'>
            <div>Delivery</div>
            <div className='bold'>$12</div>
          </div>
          <input type="radio" name="" id="" /><span>Bank</span><br />
          <input type="radio" name="" id="" checked /> Cash on Delivery
          <div className="flex">
            <input type="text" placeholder='Coupon Code' className='coupon' />
            <button className='blue'>Apply Coupon</button>
          </div><br />
          <span className="purchase blue">Purchase Now</span>
        </div>
      </div><br />
    </div>
  )
}

export default Checkout